import { useEffect } from 'react';
import Buttons from '../components/Buttons';

function Uranus({ overview, setOverview, handleOverview, surface, setSurface, handleSurface, atmosphere, setAtmosphere, handleAtmosphere, orbit, setOrbit, handleOrbit }) {
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
              <img className='planet-img' src={require('../assets/uranus.png')} alt='Planet Uranus' />
              <div className='planet-text-content'>
                <h1 className='planet-h1'>Uranus</h1>
                {overview === true ? 
                <p className='planet-p'>
                    Uranus is the seventh planet from the Sun and is a gaseous ice giant. Most of the planet is made out of
                    water, ammomia, and methane in a supercritical phase of matter. The planet has the lowest minimum temperature out 
                    of all the Solar System's planets.
                </p> : surface === true ?
                <p className='planet-p'>
                    Uranus doesn't have a true surface, as the planet is mostly swirling fluids. Most of the planet's mass is made up 
                    of water, ammonia, and methane above a small rocky core. Near the core temperatures can reach up to 9,000 degrees Fahrenheit.
                </p> : atmosphere === true ? 
                <p className='planet-p'>
                    Uranus' atmosphere is mostly hydrogen and helium with trace amounts of methane, water, and ammonia. The methane is what 
                    gives Uranus it's blue coloring. Atmospheric wind speeds can reach upwards of 560 miles per hour.
                </p> : orbit === true ? 
                <p className='planet-p'>
                    Uranus completes one full rotation in about 17 hours and makes a complete orbit around the Sun in about 30,687 Earth days. 
                    It's axis of rotation is 97.77 degrees, which causes the most extreme seasons in the Solar System. Like Venus, it rotates backwards
                    on it's axis.
                </p> : null}
              </div>
            </div>
            <div className='planet-facts-container'>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Distance From Sun</p>
                <p className='planet-fact-number'>1, 920, 389, 583 MI</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Light Time To Sun</p>
                <p className='planet-fact-number'>163.429476 MINS</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Length Of Year</p>
                <p className='planet-fact-number'>30, 687 Earth Days</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Planet Type</p>
                <p className='planet-fact-number'>Ice Giant</p>
            </div>
        </div>
        </main>
    )
}

export default Uranus;