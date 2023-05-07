
function Jupiter() {
    return (
        <main className='planet-container'>   
            <div className='planet-text-container'>
              <img className='planet-img' src={require('../assets/jupiter.png')} alt='Planet Jupiter' />
              <div className='planet-text-content'>
              <h1 className='planet-h1'>Jupiter</h1>
              <p className='planet-p'>
                Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with
                a mass more than two and a half times that of all other planets in the Solar System combined. Jupiter is the
                third brightest natural object in the Earth's night sky after the Moon and Venus.
             </p>
            </div>
           </div>
           <div className='planet-facts-container'>
           <div className='planet-fact'>
               <p className='planet-fact-text'>Distance From Sun</p>
               <p className='planet-fact-number'>460, 537, 119 MI</p>
           </div>
           <div className='planet-fact'>
               <p className='planet-fact-text'>Light Time To Sun</p>
               <p className='planet-fact-number'>41.204221 MINS</p>
           </div>
           <div className='planet-fact'>
               <p className='planet-fact-text'>Length Of Year</p>
               <p className='planet-fact-number'>4, 333 Earth Days</p>
          </div>
           <div className='planet-fact'>
               <p className='planet-fact-text'>Planet Type</p>
               <p className='planet-fact-number'>Gas Giant</p>
          </div>
          </div>
        </main>
    )
}

export default Jupiter;