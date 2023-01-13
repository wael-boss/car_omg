import { useEffect } from "react"
import { useContext } from "react"
import ModelSort from "../components/ModelSort"
import DataContext from "../context/DataContext"
import {HiOutlineChevronDoubleLeft ,HiOutlineChevronDoubleRight} from 'react-icons/hi'
const Model = () => {
  const {navigateMethod ,navigation ,changePage ,setItemSearch ,itemSearch ,setCompletion ,getModels ,models ,isLoading ,fetchErr ,setFetchErr ,choices}=useContext(DataContext)
  // 

  // 
  useEffect(()=>{
  if(!navigateMethod){
    setTimeout(()=>{navigation('/find_car')
    return},1000)
  }
  setFetchErr(null)
  setItemSearch('')
  setCompletion(87)
  getModels()
  },[])
  const errRetry=()=>{
    setFetchErr(null)
    getModels()
  }
  return (
    <div className="form">
      <div className="formHead">
      <h1>choose the model of the car</h1>
      {choices.make ? <p>these are models from {choices.make}</p> : <p>here are the models based on your choices</p>}
      </div>
      <div className="formBody">
        <input
          type='text'
          value={itemSearch}
          onChange={e=>setItemSearch(e.target.value)}
          placeholder='search for a make'
          autoFocus
        />
        {isLoading && <p className="loadingMsg">loading ...</p>}
        {fetchErr && !isLoading && <p className="errorMsg" onClick={errRetry}>there would seem to be an error...click to retry the action</p>}
        <div id="modelsContainer">
        {!isLoading && !fetchErr && 
          <ModelSort models={itemSearch.length ? models.filter(model=>(model.model.toLowerCase()).includes(itemSearch.toLowerCase())) : models}
        />}</div>
        <div id="changePageDiv">
        <button className="highlight" onClick={()=>(changePage(-1))}><HiOutlineChevronDoubleLeft/></button>
        <button className="highlight" onClick={()=>(changePage(1))}><HiOutlineChevronDoubleRight/></button>
        </div>
      </div>
    </div>
  )
}

export default Model