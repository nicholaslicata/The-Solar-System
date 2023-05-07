
function Venus() {
    return (
        <main className='planet-container'>   
        <div className='planet-text-container'>
          <img className='planet-img' src={require('../assets/venus.png')} alt='Planet Venus' />
          <div className='planet-text-content'>
            <h1 className='planet-h1'>Venus</h1>
            <p className='planet-p'>
                Venus is the second planet from the Sun. It is a terrestrial planet and the only one of the Solar system
                with a substantial and thicker atmosphere other than Earth. Venus is the only Solar System object with a size
                and mass close to Earths.
            </p>
          </div>
        </div>
        <div className='planet-facts-container'>
        <div className='planet-fact'>
            <p className='planet-fact-text'>Distance From Sun</p>
            <p className='planet-fact-number'>66, 855, 207 MI</p>
        </div>
        <div className='planet-fact'>
            <p className='planet-fact-text'>Light Time To Sun</p>
            <p className='planet-fact-number'>5.981530 MINS</p>
        </div>
        <div className='planet-fact'>
            <p className='planet-fact-text'>Length Of Year</p>
            <p className='planet-fact-number'>225 Earth Days</p>
        </div>
        <div className='planet-fact'>
            <p className='planet-fact-text'>Planet Type</p>
            <p className='planet-fact-number'>Terrestrial</p>
        </div>
    </div>
    </main>
    )
}

export default Venus;