import { useContext } from "react"
import DataContext from "../context/DataContext"
const MakesSort = ({makes}) => {
  const {setChoices ,navigation}=useContext(DataContext)
    let i=0
    const makeChoice=(make)=>{
      setChoices(prev=>{
        prev.make=make
        return prev
    })
      navigation('/find_car/model')
    }
  return (
    <div id="makesBox">
        {makes.length ? makes.map(make=>{
            i++
            return(<p onClick={()=>{makeChoice(make)}} key={i}>{make}</p>)
        }) : <h6>we store no data over this car as of yet</h6>}
   </div>
  )
}

export default MakesSort