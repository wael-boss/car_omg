import { useContext } from "react"
import { useNavigate , Outlet } from "react-router-dom"
import {AiOutlineLeft} from 'react-icons/ai'
import '../css/findCar.css'
import DataContext from "../context/DataContext"

const FindCar = () => {
    const {completion ,setCompletion}=useContext(DataContext)
    const navigator=useNavigate()
  return (
    <main>
      <section id="formsSection">
        <div id="rangeDiv">
        <p id="goBack"><AiOutlineLeft/><span onClick={()=>{navigator(-1)}}>Back</span></p>
        <p>{completion}% completed</p>
        <div id='completionBar'><div style={{width:`${completion}%`}}></div></div>
        </div>
        <div id="formsPlace">
          <Outlet/>
        </div>
      </section>
      <section className="landingSection" style={{width:'35%'}}></section>
    </main>
  )
}

export default FindCar