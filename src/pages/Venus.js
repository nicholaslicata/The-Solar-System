import { useEffect } from 'react';
import Buttons from '../components/Buttons';

function Venus({ overview, setOverview, handleOverview, surface, setSurface, handleSurface, atmosphere, setAtmosphere, handleAtmosphere, orbit, setOrbit, handleOrbit}) {
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
          <img className='planet-img' src={require('../assets/venus.png')} alt='Planet Venus' />
          <div className='planet-text-content'>
            <h1 className='planet-h1'>Venus</h1>
            {overview === true ?
            <p className='planet-p'>
                Venus is the second planet from the Sun. It is a terrestrial planet and the only one of the Solar system
                with a substantial and thicker atmosphere other than Earth. Venus is the only Solar System object with a size
                and mass close to Earths.
            </p> : surface === true ?
            <p className='planet-p'>
                Venus has a  rust colored surface shaped from volcanic activity. The landscape is largely made up of valleys, mountains, 
                and volcanoes. It's the hottest planet in the Solar System with surface temperatures reaching up to 900 degrees Fahrenheit.
            </p> : atmosphere === true ? 
            <p className='planet-p'>
                Venus has a thick, toxic atmosphere made up of 96.5% carbon dioxide, 3.5% nitrogen, and traces of other gases 
                including sulfur dioxide. It's shrouded in thick, yellowish clouds of sulfuric acid that trap heat and cause 
                a greenhouse effect.
            </p> : orbit === true ? 
            <p className='planet-p'>
                Venus rotates on its axis backwards compared to most of the other planets in the Solar System. A single day on Venus
                is the equivalent of 243 Earth days, making its rotation the slowest of any planet. Its axis of rotation is just 3 degrees.
            </p> : null}   
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