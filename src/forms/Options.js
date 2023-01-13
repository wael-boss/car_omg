import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import DataContext from "../context/DataContext"


const Options = () => {
  const {setCompletion ,setNavigateMethod ,navigation ,setChoices ,defaultChoices}=useContext(DataContext)
  useEffect(()=>{
    setCompletion(14)
    setNavigateMethod(null)
    setChoices(defaultChoices)
  },[])
  const navigationMethodFunc=(method)=>{
    setNavigateMethod(method)
    if(method==='search'){
      navigation('/find_car/search')
    }else if(method==='discover'){
      navigation('/find_car/type')
    }
  }
  return (
    <div className="form">
    <div className="formHead">
        <h1>Do you know what you’re looking for?</h1>
    </div>
    <div className="formBody">
    <h4 className="highlight" onClick={()=>{navigationMethodFunc('search')}}>I know the make and model</h4>
    <h4 className="highlight" onClick={()=>{navigationMethodFunc('discover')}}>I’m not sure what I want</h4>
    </div>
    </div>
  )
}

export default Options