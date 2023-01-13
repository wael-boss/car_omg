import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
const DataContext=createContext({})

export const DataProvider=({children})=>{
    const defaultChoices={
        year:null,
        make:null,
        model:null,
        type:null,
        page:0,
        limit:20,
    }
    const [choices ,setChoices]=useState(defaultChoices)
    const types=[
        "SUV",
        "Convertible",
        "Pickup",
        "Van/Minivan",
        "Wagon",
        "Sedan",
        "Coupe",
        "Hatchback"
      ]
    const [makes ,setMakes]=useState([])
    const [navigateMethod ,setNavigateMethod]=useState(null)
    const [models ,setModels]=useState([])
    const [params ,setParams]=useState(null)
    const [garage ,setGarage]=useState(JSON.parse(localStorage.getItem('parking')) || [])
    const [years ,setYears]=useState([])
    const [fetchErr ,setFetchErr]=useState(null)
    const [isLoading ,setIsLoading]=useState(false)
    const [completion ,setCompletion]=useState(5)
    const [itemSearch ,setItemSearch]=useState('')
    const navigation=useNavigate()
    /* fetch requests section*/
    const fetchData=async(category)=>{
        setIsLoading(true)
        let data=[]
        try{
            const response=await api.get(category)
            data=response.data
        }catch(err){
            setFetchErr(err.message)
        }finally{
            setIsLoading(false)
        }
        return data
    }
    const getMakes=async()=>{
        const data=await fetchData('/makes' ,choices)
        setMakes(data.sort())
    }
    const getModels=async()=>{
                setParams(choices)
        Object.entries(params).map(([key ,value])=>{
            if(value ==null ){
                delete params[key]
            }
        })
        console.log(params.page, 'params')
        api.defaults.params=params
        const data=await fetchData('/')
        setModels(data.sort((a ,b)=>{return(a.year-b.year)}))
    }
    const changePage=(operation)=>{
        const newPage=choices.page+operation
        if(newPage<0) return
        if(operation==1 && models.length<choices.limit) return
        setChoices(prev=>{
            prev.page=newPage
            return prev
        })
        setTimeout(getModels,150)
    }
    const getYears=async()=>{
        const data=await fetchData('/years' ,choices)
        setYears(data.sort())
    }
    /* */
    const saveGarage=(newGarage)=>{
        localStorage.setItem('parking',JSON.stringify(newGarage))
    }
    const modelChoice=(model)=>{
        const repeats=garage.filter(car=>car.id==model.id)
        if(repeats.length>0) return
        setCompletion(100)
        const newGarage=[...garage ,model]
        setGarage(newGarage)
        saveGarage(newGarage)
    }
    const iconHandler=(type)=>{
        const Types=type.split(', ')
        return(Types.map(type=>{
            if(type.includes('/')){
                type=type.split('/').join('')
            }
            return(
                <img title={type} src={`/carTypes/${type}.png`} alt={type}/>
            )
        }))
    }
    const choseTypeHandler=(type)=>{
        setChoices(prev=>{
            prev.type=type
            return prev
        })
        navigation('/find_car/year')
    }
    const choseYearHandler=(year)=>{
        setChoices(prev=>{
            prev.year=year
            return prev
        })
        navigation('/find_car/search')
    }
    const googleIt=(model)=>{
       window.open(`https://www.google.com/search?q=${model.make}+${model.model}+${model.type}+${model.year}&oq=${model.make}+${model.model}+${model.type}+${model.year}&aqs=chrome..69i57j0i512l9.3871j0j7&sourceid=chrome&ie=UTF-8`,'_blank')
    }
    return(
        <DataContext.Provider value={{
            makes ,fetchErr ,setFetchErr ,isLoading ,setIsLoading ,getMakes ,completion ,setCompletion ,navigation ,choices ,setChoices ,getModels ,itemSearch ,setItemSearch ,models ,setModels ,changePage ,garage ,setGarage ,saveGarage ,modelChoice ,types ,iconHandler ,choseTypeHandler ,getYears ,years ,choseYearHandler ,setNavigateMethod ,navigateMethod ,defaultChoices ,googleIt
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext