import { useEffect } from 'react';
import Buttons from '../components/Buttons';

function Neptune({ overview, setOverview, handleOverview, surface, setSurface, handleSurface, atmosphere, setAtmosphere, handleAtmosphere, orbit, setOrbit, handleOrbit }) {
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
              <img className='planet-img' src={require('../assets/neptune.png')} alt='Planet Neptune' />
              <div className='planet-text-content'>
                <h1 className='planet-h1'>Neptune</h1>
                {overview === true ? 
                <p className='planet-p'>
                    Neptune is the eighth planet from the Sun and the farthest know planet in the Solar System. 
                    It is the fourth largetst planet in the Solar System by diameter, the third most massive planet, 
                    and the densest giant planet. It's overall mass is 17 times that of Earth.
                </p> : surface === true ? 
                <p className='planet-p'>
                    Neptune doesn't have a true surface, as it is composed primarily of liquids and gases. Most 
                    of the planet's mass is made up of water, methane, and ammonia above a small rocky core. Scientists believe 
                    that there might be an ocean of super hot water underneath Neptune's clouds.
                </p> : atmosphere === true ? 
                <p className='planet-p'>
                    Neptune's atmosphere is made up of 80% hydrogen and 19% helium, along with traces of hydrocarbons and possibly
                    nitrogen, but contains a higher amount of water, ammonia, and methane. However, there may be an unknown component that 
                    causes Neptune's blue coloring.
                </p> : orbit === true ?
                <p className='planet-p'>
                    Neptune completes one full rotation in about 16 hours and makes a complete orbit around the Sun
                    in about 60,190 days. It's axis of rotation is 28 degrees, which is similar to the tilt of Earth and Mars.
                    As a result, Neptune has similar seasonal changes.
                </p> : null}
              </div>
            </div>
            <div className='planet-facts-container'>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Distance From Sun</p>
                <p className='planet-fact-number'>2, 780, 268, 401 MI</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Light Time To Sun</p>
                <p className='planet-fact-number'>248.750401 MINS</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Length Of Year</p>
                <p className='planet-fact-number'>60, 190 Earth Days</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Planet Type</p>
                <p className='planet-fact-number'>Ice Giant</p>
            </div>
        </div>
        </main>
    )
}

export default Neptune;