
function Mars() {
    return (
        <main className='planet-container'>   
        <div className='planet-text-container'>
          <img className='planet-img' src={require('../assets/mars.png')} alt='Planet Mars' />
          <div className='planet-text-content'>
            <h1 className='planet-h1'>Mars</h1>
            <p className='planet-p'>
                Mars is the fourth planet and the furthest terrestrial planet from the Sun. The reason Mars has a red color
                on it's surface is due to the finely grained iron oxide dust in the soil. Surrounding the Martian surface is a 
                dynamic thin atmosphere made primarily of carbon dioxide.
            </p>
          </div>
        </div>
        <div className='planet-facts-container'>
        <div className='planet-fact'>
            <p className='planet-fact-text'>Distance From Sun</p>
            <p className='planet-fact-number'>154, 614, 833 MI</p>
        </div>
        <div className='planet-fact'>
            <p className='planet-fact-text'>Light Time To Sun</p>
            <p className='planet-fact-number'>13.833378 MINS</p>
        </div>
        <div className='planet-fact'>
            <p className='planet-fact-text'>Length Of Year</p>
            <p className='planet-fact-number'>687 Earth Days</p>
        </div>
        <div className='planet-fact'>
            <p className='planet-fact-text'>Planet Type</p>
            <p className='planet-fact-number'>Terrestrial</p>
        </div>
    </div>
    </main>
    )
}

export default Mars;