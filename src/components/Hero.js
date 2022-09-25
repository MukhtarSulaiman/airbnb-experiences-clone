import landingImg from '../assets/images/img-grid.png'

const Hero = () => {
      return (
            <section className='hero'>
                  <div  className="hero-top">
                        <img src={landingImg} alt="imgage groupe" />
                  </div>
                  <div className="hero-bottom">
                        <h1>Online Experiences</h1>
                        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                  </div>
            </section>
      )
}

export default Hero