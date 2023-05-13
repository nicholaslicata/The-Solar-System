import { useEffect } from 'react';
import Buttons from '../components/Buttons';

function Earth({ overview, setOverview, handleOverview, surface, setSurface, handleSurface, atmosphere, setAtmosphere, handleAtmosphere, orbit, setOrbit, handleOrbit }) {
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
               <img className='planet-img' src={require('../assets/earth.png')} alt='Planet Earth' />
             <div className='planet-text-content'>
               <h1 className='planet-h1'>Earth</h1>
               {overview === true ?
               <p className='planet-p'>
                Earth is the third planet from the Sun and the only place known in the universe where
                life has originated and found habitability. It is the only planet in the Solar System to have 
                over 70.8% of it's surface as liquid water, which classifies Earth as an ocean world.
              </p> : surface === true ?
               <p className='planet-p'>
                Earth is the only planet in the Solar System with liquid water  on the surface. Earth's
                global ocean covers nearly 70% of the planet's surface and has an average depth of 2.5 miles. 
                Earth's longest mountain range and most of it's volcanoes are ocean water.
              </p> : atmosphere === true ?
               <p className='planet-p'>
                Earth's atmosphere sustains it's surface conditions and protects it from most meteroids as well 
                as harmful radiation coming from the Sun. It has a composition of 78% nitrogen, 21% oxygen, and 1% 
                other gases such as argon, carbon dioxide, and neon.
              </p> : orbit === true ? 
               <p className='planet-p'>
                Earth's average orbital distance is around 93 million miles. It completes one rotation every 23.9 
                hours and one full trip around the Sun every 365.25 days. Earth's axis of rotation is 23.4 degrees. 
                This tilt causes the yearly cycle of it's seasons.
              </p> : null }
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