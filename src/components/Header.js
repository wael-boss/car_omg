import { NavLink } from "react-router-dom"
import {FaHome ,FaQuestionCircle ,FaUserAlt ,FaSearch} from "react-icons/fa"
import {GiHomeGarage} from 'react-icons/gi'
import { useContext } from "react"
import DataContext from "../context/DataContext"
const Header = () => {
  const {garage}=useContext(DataContext)
  return (
    <header>
    <div id="logoContainer">
        <div><span id="FlogoL">car</span><span className="OMG" id="SlogoL">OMG</span></div>
    </div>
    <nav>
        <NavLink to='/'><FaHome/></NavLink>
        <NavLink to='/garage'><GiHomeGarage/><span>{garage.length}</span></NavLink>
        <NavLink to='/find_car'><FaSearch/></NavLink>
        <NavLink to='/about'><FaQuestionCircle/></NavLink>
    </nav>
    <div>
      <button><FaUserAlt/></button>
    </div>
    </header>
  )
}

export default Header