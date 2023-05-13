import { useEffect } from 'react';
import Buttons from '../components/Buttons';

function Mars({ overview, setOverview, handleOverview, surface, setSurface, handleSurface, atmosphere, setAtmosphere, handleAtmosphere, orbit, setOrbit, handleOrbit }) {
    useEffect(() => {
        setOverview(true);
        setSurface(false);
        setAtmosphere(false);
        setOrbit(false);
    }, [])

    return (
        <main className='planet-container'>   
          <Buttons overview={overview} handleOverview={handleOverview} surface={surface} handleSurface={handleSurface} atmosphere={atmosphere} handleAtmosphere={handleAtmosphere} orbit={orbit} handleOrbit={handleOrbit} />
            <div className='planet-text-container'>
              <img className='planet-img' src={require('../assets/mars.png')} alt='Planet Mars' />
               <div className='planet-text-content'>
                 <h1 className='planet-h1'>Mars</h1>
                 {overview === true ? 
                 <p className='planet-p'>
                  Mars is the fourth planet and the furthest terrestrial planet from the Sun. The reason Mars has a red color
                  on it's surface is due to the finely grained iron oxide dust in the soil. Surrounding the Martian surface is a 
                  dynamic thin atmosphere made primarily of carbon dioxide.
                </p> : surface === true ? 
                 <p className='planet-p'>
                  Mars is known as the 'red planet' due to oxidization of iron in the rocks. Dust gets kicked up into the atmopshere 
                  making it appear red from a distance. The surface of Mars is home to Olympus Mons, the largets volcano in the Solar System.
                </p> : atmosphere === true ?
                <p className='planet-p'>
                  Mars has a thin atmosphere that doesn't offer much proection from outside impacts. It is primarily made up of 95% carbon dioxide, 2.8% nitrogen, and 2% argon. It also contains 
                  trace levels of water vapor, oxygen, carbon monoxide, hydrogen and noble gases. 
                </p> : orbit === true ?
                <p className='planet-p'>
                   Mars completes one rotation every 24.6 hours. One year on Mars is the equivalent of 687 Earth days. It's average distance 
                   from the Sun is roughly 143 million miles. It's axis of rotation is 25 degrees. As a result, Mars has seasons like Earth, but
                   they are nearly twice as long.
                </p> : null }
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