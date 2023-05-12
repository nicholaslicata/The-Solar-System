import { useEffect } from 'react';
import Buttons from '../components/Buttons';


function Mercury({overview, setOverview, handleOverview, surface, setSurface, handleSurface, atmosphere, setAtmosphere, handleAtmosphere, orbit, setOrbit, handleOrbit}) {
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
              <img className='planet-img' src={require('../assets/mercury.png')} alt='Planet Mercury' />
              <div className='planet-text-content'>
                <h1 className='planet-h1'>Mercury</h1>
                {overview === true ?
                <p className='planet-p'>
                    Mercury is the first planet from the Sun and the smallest planet in the solar system.
                    It is a terrestrial planet with a heavily cratered surface due to the planet having no geological
                    activity and an extremelty tenuous atmosphere.
                </p>  : surface === true ?
                <p className='planet-p'>
                    Mercury's surface has a similar apperance to that of the Earth's moon with many craters caused
                    by collisions with meteoroids and comets. The surface can reach 800 degrees Fahrenheit during the day 
                    and drop to minus 290 degrees Fahrenheit at night.
                </p>  : atmosphere === true ?
                <p className='planet-p'>
                    Mercury has a very tenous atmosphere that is instead commonly referred to as an exosphere, which is made up
                    of atoms blasted off the surface by solar winds and striking meteoroids. This exosphere 
                    is composed mostly of oxygen, sodium, hydrogen, helium, and postassium.
                </p>
                    : orbit === true ?
                <p className='planet-p'>
                    Mercury's orbit can take the planet as close as 29 million miles and as far as 43 million miles from the Sun. 
                    Travelling at close to 29 miles per second, Mercury completes one rotation every 59 Earth 
                    days. It's axis of rotation is just 2 degrees.
                </p> : null}               
              </div>
            </div>
            <div className='planet-facts-container'>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Distance From Sun</p>
                <p className='planet-fact-number'>42, 604, 684 MI</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Light Time To Sun</p>
                <p className='planet-fact-number'>3.811849 MINS</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Length Of Year</p>
                <p className='planet-fact-number'>88 Earth Days</p>
            </div>
            <div className='planet-fact'>
                <p className='planet-fact-text'>Planet Type</p>
                <p className='planet-fact-number'>Terrestrial</p>
            </div>
        </div>
        </main>
    )
}

export default Mercury;