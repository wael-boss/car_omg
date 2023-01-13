import { useContext, useEffect } from "react"
import OperationBtns from "../components/operationBtns"
import DataContext from "../context/DataContext"

const Year = () => {
    const {setChoices ,navigateMethod ,navigation ,choseYearHandler,years ,getYears ,fetchErr ,isLoading ,setFetchErr ,setCompletion}=useContext(DataContext)
    useEffect(()=>{
        if(!navigateMethod){
            navigation('/find_car')
            return
        }
        setChoices(prev=>{
            prev.year=null
            return prev
          })
        setCompletion(52)
        if(!years.length) getYears()
    },[])
    const errRetry=()=>{
        setFetchErr(null)
        getYears()
      }
    return (
        <div className="form">
            <div className="formHead">
            <h1>Which year would you consider for your new car?</h1>
            </div>
            <div className="formBody">
            {isLoading && <p className="loadingMsg">loading ...</p>}
            {fetchErr && !isLoading && <p className="errorMsg" onClick={errRetry}>there would seem to be an error...click to retry the action</p>}
            {!isLoading && !fetchErr && 
                <div id="yearsDiv">
                    {years.map(year=>{
                        return(<p onClick={()=>{choseYearHandler(year)}} key={year}>{year}</p>)
                    })}
                </div>
                }
            </div>
            <OperationBtns nextPage='search'/>
        </div>
        )
}

export default Year