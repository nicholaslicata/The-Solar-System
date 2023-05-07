
function Neptune() {
    return (
        <main className='planet-container'>   
            <div className='planet-text-container'>
              <img className='planet-img' src={require('../assets/neptune.png')} alt='Planet Neptune' />
              <div className='planet-text-content'>
                <h1 className='planet-h1'>Neptune</h1>
                <p className='planet-p'>
                    Neptune is the eighth planet from the Sun and the farthest know planet in the Solar System. 
                    It is the fourth largetst planet in the Solar System by diameter, the third most massive planet, 
                    and the densest giant planet. It's overall mass is 17 times that of Earth.
                </p>
              </div>
            </div>
            <div className='planet-facts-container'>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Distance From Sun</p>
                <p className='planet-fact-number'>2, 780, 268, 401 MI</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Light Time To Sun</p>
                <p className='planet-fact-number'>248.750401 MINS</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Length Of Year</p>
                <p className='planet-fact-number'>60, 190 Earth Days</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Planet Type</p>
                <p className='planet-fact-number'>Ice Giant</p>
            </div>
        </div>
        </main>
    )
}

export default Neptune;