import { useContext } from "react"
import DataContext from "../context/DataContext"

const ParkingSpots = () => {
    const {garage ,googleIt ,saveGarage ,setGarage}=useContext(DataContext)
    let i=0
    const deleteCar=(id)=>{
      let neededDiv=null
      const cars=document.querySelectorAll('.car')
      const bob=garage.filter(car=>car.id!==id)
      cars.forEach(car=>{
        if(car.dataset.id==id){
            neededDiv=car
        }
      })
      neededDiv.classList.add('deleted')
      setTimeout(()=>{
        saveGarage(bob)
        setGarage(bob)
      },600)
    }
  return (
    <>
    {garage.map(car=>{
        return(<div key={car.id}  className="parkSpace">
            <div
            className="car"
            data-id={car.id}
            title={`
            ${car.make}
            ${car.model}
            ${car.year}
            `}
            onClick={()=>{googleIt(car)}}>
            <img src={`/carTypes/${car.type.split(', ')[0].split('/').join('')}.png`} draggable='false'/>
            </div>
            <button onClick={()=>{deleteCar(car.id)}}>dis-own</button>
        </div>)
    })}
    </>
  )
}

export default ParkingSpots