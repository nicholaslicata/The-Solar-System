
function Buttons({ overview, handleOverview, surface, handleSurface, atmosphere, handleAtmosphere, orbit, handleOrbit}) {
    return (
        <div className='buttons-container'>
            <button className={overview === true ? 'planet-button-active' : 'planet-button'} onClick={handleOverview}>Overview</button>
            <button className={surface === true ? 'planet-button-active' : 'planet-button'} onClick={handleSurface}>Surface</button>
            <button className={atmosphere === true ? 'planet-button-active' : 'planet-button'} onClick={handleAtmosphere}>Atmosphere</button>
            <button className={orbit === true ? 'planet-button-active' : 'planet-button'} onClick={handleOrbit}>Orbit</button>
        </div>
    )
}

export default Buttons;