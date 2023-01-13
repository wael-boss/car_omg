import { useContext, useEffect } from "react"
import OperationBtns from "../components/operationBtns"
import TypesCards from "../components/typesCards"
import DataContext from "../context/DataContext"

const Type = () => {
    const {setChoices ,navigateMethod ,navigation , setCompletion ,types }=useContext(DataContext)
    useEffect(
    ()=>{
    if(!navigateMethod){
      console.log(navigateMethod)
        navigation('/find_car')
        return
    }
    setChoices(prev=>{
      prev.type=null
      return prev
    })
    setCompletion(29)
    },[])
  return (
    <div className="form">
        <div className="formHead">
        <h1>Which body types would you consider for your new car?</h1>
        </div>
        <div className="formBody">
            <div id="CardsDiv">
              {types.map(type=>{return(<TypesCards type={type}/>)})}
            </div>
        </div>
        <OperationBtns nextPage='year'/>
    </div>
  )
}

export default Type