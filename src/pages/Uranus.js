
function Uranus() {
    return (
        <main className='planet-container'>   
            <div className='planet-text-container'>
              <img className='planet-img' src={require('../assets/uranus.png')} alt='Planet Uranus' />
              <div className='planet-text-content'>
                <h1 className='planet-h1'>Uranus</h1>
                <p className='planet-p'>
                    Uranus is the seventh planet from the Sun and is a gaseous ice giant. Most of the planet is made out of
                    water, ammomia, and methane in a supercritical phase of matter. The planet has the lowest minimum temperature out 
                    of all the Solar System's planets.
                </p>
              </div>
            </div>
            <div className='planet-facts-container'>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Distance From Sun</p>
                <p className='planet-fact-number'>1, 920, 389, 583 MI</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Light Time To Sun</p>
                <p className='planet-fact-number'>163.429476 MINS</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Length Of Year</p>
                <p className='planet-fact-number'>30, 687 Earth Days</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Planet Type</p>
                <p className='planet-fact-number'>Ice Giant</p>
            </div>
        </div>
        </main>
    )
}

export default Uranus;