import { useContext } from "react"
import DataContext from "../context/DataContext"

const ModelSort = ({models}) => {
    const  { modelChoice ,iconHandler ,choices ,googleIt }=useContext(DataContext)
    let i=0

  return (
    <>
        {models.length ? models.map(model=>{
            i++
            return(
            <div title="double click to add to garage" className="modelBox" onDoubleClick={()=>{modelChoice(model)}} key={i}>
            <div className="carName"
            title="click to search"
            onClick={()=>{googleIt(model)}}>
            {!choices.make &&<p>{model.make}</p>}
            <p>{model.model}</p></div>
            <p>{model.year}</p>
            <div className="iconContainer">{iconHandler(model.type)}</div>
            </div>)
        })
        : <h6>this list does not include your search</h6>}
   </>
  )
}

export default ModelSort