import { useEffect } from 'react';
import Buttons from '../components/Buttons';

function Saturn({ overview, setOverview, handleOverview, surface, setSurface, handleSurface, atmosphere, setAtmosphere, handleAtmosphere, orbit, setOrbit, handleOrbit }) {
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
              <img className='planet-img' src={require('../assets/saturn.png')} alt='Planet Saturn' />
              <div className='planet-text-content'>
                <h1 className='planet-h1'>Saturn</h1>
                {overview === true ? 
                <p className='planet-p'>
                    Saturn is the sixth planet from the Sun and has an intricate system of icy rings. It is the second largest planet
                    in the Solar System and 96% of the planet is made out of lightweight hydrogen. Saturn has a magnetosphere with a strength
                    comparable to Earth's.
                </p> : surface === true ? 
                <p className='planet-p'>
                    Saturn doesn't have a true surface. As a gas giant it is primarily composed of swirling gases and liquids. It is 
                    predominantly made up of hydrogen and helium. However, it is likely to have a solid core of metals like iron and nickel.
                </p> : atmosphere === true ? 
                <p className='planet-p'>
                    Saturn's yellowish atmosphere contains 96.3% molecular hydrogen and 3.25% helium. It also contains trace amounts of ammonia,
                    acetylene, ethane, propane, phosphine, and methane. It's atmospheric winds can reach up to 1,600 feet per second.
                </p> : orbit === true ?
                <p className='planet-p'>
                    Saturn has the second shortest day in the Solar System, completing one full rotation in only 10.7 hours. It makes a complete
                    orbit around the Sun in about 10,756 Earth days. It's axis of rotation is 26.73 degrees, meaning that Saturn experiences seasons
                    like Earth.
                </p> : null}
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