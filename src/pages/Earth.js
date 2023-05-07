
function Earth() {
    return (
        <main className='planet-container'>   
        <div className='planet-text-container'>
          <img className='planet-img' src={require('../assets/earth.png')} alt='Planet Earth' />
          <div className='planet-text-content'>
            <h1 className='planet-h1'>Earth</h1>
            <p className='planet-p'>
                Earth is the third planet from the Sun and the only place known in the universe where
                life has originated and found habitability. It is the only planet in the Solar System to have 
                over 70.8% of it's surface as liquid water, which classifies Earth as an ocean world.
            </p>
          </div>
        </div>
        <div className='planet-facts-container'>
        <div className='planet-fact'>
            <p className='planet-fact-text'>Distance From Sun</p>
            <p className='planet-fact-number'>93, 795, 078 MI</p>
        </div>
        <div className='planet-fact'>
            <p className='planet-fact-text'>Light Time To Sun</p>
            <p className='planet-fact-number'>8.391839 MINS</p>
        </div>
        <div className='planet-fact'>
            <p className='planet-fact-text'>Length Of Year</p>
            <p className='planet-fact-number'>365 Earth Days</p>
        </div>
        <div className='planet-fact'>
            <p className='planet-fact-text'>Planet Type</p>
            <p className='planet-fact-number'>Terrestrial</p>
        </div>
    </div>
    </main>
    )
}

export default Earth;