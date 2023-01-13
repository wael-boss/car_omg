import { useContext } from "react"
import DataContext from "../context/DataContext"

const OperationBtns = ({nextPage}) => {
  const {navigation}=useContext(DataContext)
  return (
    <div className="operationDiscoverBtns">
    <button onClick={()=>{navigation(`find_car/${nextPage}`)}} className="skip" >Skip</button>
    </div>
  )
}

export default OperationBtns