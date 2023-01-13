import { Link } from 'react-router-dom'
import '../css/home.css'

const Home = () => {
  return (
    <main>
      <section className="landingSection">
      <div id="heroSection">
        <div id='heroInfo'>
        <p id="heroText">Find. Save. <span className="OMG">OMG .</span></p>
        <div id="buttonsDiv">
          <Link to='garage' className='highlight'>Garage</Link>
          <Link to='find_car' className='highlight'>Find A Car</Link>
        </div>
        <div id='ratingDiv'>
          <p>Rated <strong>4.6/5</strong> from <strong>33,628</strong> reviews</p>
          <div>
            <p><span className='green_star'>&#9733;</span> Trustastronot</p>
            <span className='star'></span>
            <span className='star'></span>
            <span className='star'></span>
            <span className='star'></span>
            <span className='star'></span>
          </div>
        </div>
        </div>
        <div id='heroImg'>
          <img src='/heroImage.png'/>
        </div>
      </div>
      </section>
    </main>
  )
}

export default Home