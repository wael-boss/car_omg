import { useNavigate } from "react-router-dom"

const Missing = () => {
    const navigator=useNavigate()
    setTimeout(()=>{
        navigator('/')
    },1000)
  return (
    <main>
    <section className="landingSection">
    <p>missing</p>
    </section></main>
  )
}

export default Missing