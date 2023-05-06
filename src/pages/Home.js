

function Home() {
    return (
       <main className='home-container'>
        <div className='home-text-container'>
            <img className='sun-img' src={require('../assets/the-sun.png')} alt='The Sun'/>
            <div className>
              <h1 className='home-h1'>Our Solar System</h1>
              <p className='home-p'>The Solar System is the gravitationally bound system of the Sun
                and the objects that orbit it. It was formed 4.6 billion years ago
                from the gravitational collapse of a giant interstellar molecular cloud.
              </p>
            </div>
        </div>
        <div className='home-facts-container'>
            <div className='home-fact'>
                <p className='home-fact-text'>Planets</p>
                <p className='home-fact-number'>8</p>
            </div>
            <div className='home-fact'>
                <p className='home-fact-text'>Moons</p>
                <p className='home-fact-number'>200 +</p>
            </div>
            <div className='home-fact'>
                <p className='home-fact-text'>Asteroids</p>
                <p className='home-fact-number'>1, 281, 492</p>
            </div>
            <div className='home-fact'>
                <p className='home-fact-text'>Comets</p>
                <p className='home-fact-number'>3, 869</p>
            </div>
        </div>
       </main>
    )
}

export default Home;