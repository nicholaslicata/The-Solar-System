
function Saturn() {
    return (
        <main className='planet-container'>   
            <div className='planet-text-container'>
              <img className='planet-img' src={require('../assets/saturn.png')} alt='Planet Saturn' />
              <div className='planet-text-content'>
                <h1 className='planet-h1'>Saturn</h1>
                <p className='planet-p'>
                    Saturn is the sixth planet from the Sun and has an intricate system of icy rings. It is the second largest planet
                    in the Solar System and 96% of the planet is made out of lightweight hydrogen. Saturn has a magnetosphere with a strength
                    comparable to Earth's.
                </p>
              </div>
            </div>
            <div className='planet-facts-container'>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Distance From Sun</p>
                <p className='planet-fact-number'>911, 236, 354 MI</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Light Time To Sun</p>
                <p className='planet-fact-number'>81.528247 MINS</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Length Of Year</p>
                <p className='planet-fact-number'>10, 759 Earth Days</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Planet Type</p>
                <p className='planet-fact-number'>Gas Giant</p>
            </div>
        </div>
        </main>
    )
}

export default Saturn;