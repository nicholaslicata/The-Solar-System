import { useEffect } from 'react';
import Buttons from '../components/Buttons';

function Jupiter({ overview, setOverview, handleOverview, surface, setSurface, handleSurface, atmosphere, setAtmosphere, handleAtmosphere, orbit, setOrbit, handleOrbit }) {
    useEffect(() => {
        setOverview(true);
        setSurface(false);
        setAtmosphere(false);
        setOrbit(false);
    }, [])

    return (
        <main className='planet-container'>  
          <Buttons overview={overview} handleOverview={handleOverview} surface={surface} handleSurface={handleSurface} atmosphere={atmosphere} handleAtmosphere={handleAtmosphere} orbit={orbit} handleOrbit={handleOrbit}/> 
            <div className='planet-text-container'>
              <img className='planet-img' src={require('../assets/jupiter.png')} alt='Planet Jupiter' />
              <div className='planet-text-content'>
              <h1 className='planet-h1'>Jupiter</h1>
              {overview === true ?  
              <p className='planet-p'>
                Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with
                a mass more than two and a half times that of all other planets in the Solar System combined. Jupiter is the
                third brightest natural object in the Earth's night sky after the Moon and Venus.
             </p> : surface === true ?
              <p className='planet-p'>
                Jupiter doesn't have a true surface. As a gas giant, it is primarily composed of gas and liquid rather 
                than any solid matter. Its made up of 90% hydrogen by volume as well as helium which constitutes a quarter 
                of its mass and a tenth of its volume.
             </p> : atmosphere === true ?
              <p className='planet-p'> 
                Jupiter has the largest planetary atmosphere in the Solar system. Its mostly made up of hydrogen, helium, and 
                small amounts of methane, ammonia, hydrogen sulfide, and water. It's swirling apperance is actually cold, windy
                clouds of ammonia and water floating in the atmosphere.
             </p> : orbit === true ? 
             <p className='planet-p'>
                Jupiter's rotation is the fastest in the Solar System. It completes a full rotation in slightly less than 10 hours 
                and makes a complete orbit around the sun in about 4,333 Earth days. It's axis of rotation is relatively small at just 3
                degrees.
             </p> : null}
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