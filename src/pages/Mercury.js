
function Mercury() {
    return (
        <main className='planet-container'>   
            <div className='planet-text-container'>
              <img className='planet-img' src={require('../assets/mercury.png')} alt='Planet Mercury' />
              <div className='planet-text-content'>
                <h1 className='planet-h1'>Mercury</h1>
                <p className='planet-p'>
                    Mercury is the first planet from the Sun and the smallest planet in the solar system.
                    It is a terrestrial planet with a heavily cratered surface due to the planet having no geological
                    activity and an extremelty tenuous atmosphere.
                </p>
              </div>
            </div>
            <div className='planet-facts-container'>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Distance From Sun</p>
                <p className='planet-fact-number'>42, 604, 684 MI</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Light Time To Sun</p>
                <p className='planet-fact-number'>3.811849 MINS</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Length Of Year</p>
                <p className='planet-fact-number'>88 Earth Days</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Planet Type</p>
                <p className='planet-fact-number'>Terrestrial</p>
            </div>
        </div>
        </main>
    )
}

export default Mercury;