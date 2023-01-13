import { useParams } from "react-router-dom"

const About = () => {
    const {id}=useParams()
  return (
    <main>
      <section className="landingSection">
      <p>about {id}</p>
      </section>
    </main>
  )
}

export default About