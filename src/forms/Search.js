import { useContext, useEffect } from "react"
import MakesSort from "../components/MakesSort"
import OperationBtns from "../components/operationBtns"
import DataContext from "../context/DataContext"

const Search = () => {
  const {setChoices ,navigateMethod ,setItemSearch ,navigation ,itemSearch ,setCompletion ,makes ,getMakes ,isLoading ,fetchErr ,setFetchErr}=useContext(DataContext)
  useEffect(()=>{
    if(!navigateMethod){
      console.log(navigateMethod)
      navigation('/find_car')
      return
    }
    setChoices(prev=>{
      prev.page=0
      prev.make=null
      return prev
    })
    setItemSearch('')
    setFetchErr(null)
    setCompletion(69)
    if(makes.length==0) getMakes()
  },[])
  const errRetry=()=>{
    setFetchErr(null)
    getMakes()
  }
  return (
    <div className="form">
      <div className="formHead">
      <h1>choose the make of the car</h1>
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
        {!isLoading && !fetchErr && <MakesSort makes={
          makes.length ? makes.filter(make=>(make.toLowerCase()).includes(itemSearch.toLowerCase())) : makes}/>}
      </div>
      {navigateMethod==='discover' &&<OperationBtns nextPage='model'/>}
    </div>
  )
}

export default Search