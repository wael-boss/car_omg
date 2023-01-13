import { useContext } from "react"
import DataContext from "../context/DataContext"

const TypesCards = ({type}) => {
    const {iconHandler ,choseTypeHandler}=useContext(DataContext)
    let i=0
  return (
    <div key={i++} className="card" onClick={()=>{choseTypeHandler(type)}}>
        {iconHandler(type)}
        <p>{type+'s'}</p>
    </div>
    )
}

export default TypesCards