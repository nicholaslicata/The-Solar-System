import { HashRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import Mercury from './pages/Mercury';
import Venus from './pages/Venus';
import Earth from './pages/Earth';
import Mars from './pages/Mars';
import Jupiter from './pages/Jupiter';
import Saturn from './pages/Saturn';
import Uranus from './pages/Uranus';
import Neptune from './pages/Neptune';
import PageNotFound from './pages/PageNotFound';

function App() {
  const [navActive, setNavActive] = useState(false);
  const [overview,setOverview] = useState(true);
  const [surface, setSurface] = useState(false);
  const [atmosphere, setAtmosphere] = useState(false);
  const [orbit, setOrbit] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && navActive) {
        closeNav();
      }
    })

    if (navActive && window.innerWidth < 768) {
      document.body.style.overflowY = 'hidden';
    } else if (!navActive) {
      document.body.style.overflowY = 'visible';
    }
  });

  function toggleNav() {
    setNavActive(!navActive);
  }
  
  function closeNav() {
    setNavActive(false);
  }

  function handleOverview() {
    setOverview(true);
    setSurface(false);
    setAtmosphere(false);
    setOrbit(false);
  }

  function handleSurface() {
    setSurface(true);
    setOverview(false);
    setAtmosphere(false);
    setOrbit(false);
  }

  function handleAtmosphere() {
    setAtmosphere(true);
    setOverview(false);
    setSurface(false);
    setOrbit(false);
  }

  function handleOrbit() {
    setOrbit(true);
    setOverview(false);
    setSurface(false);
    setAtmosphere(false);
  } 

  return (
    <HashRouter>
      <Navbar toggleNav={toggleNav} navActive={navActive} closeNav={closeNav} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='mercury' element={<Mercury overview={overview} setOverview={setOverview} handleOverview={handleOverview} surface={surface} setSurface={setSurface} handleSurface={handleSurface} atmosphere={atmosphere} setAtmosphere={setAtmosphere} handleAtmosphere={handleAtmosphere} orbit={orbit} setOrbit={setOrbit} handleOrbit={handleOrbit} />} />
        <Route path='venus' element={<Venus overview={overview} setOverview={setOverview} handleOverview={handleOverview} surface={surface} setSurface={setSurface} handleSurface={handleSurface} atmosphere={atmosphere} setAtmosphere={setAtmosphere} handleAtmosphere={handleAtmosphere} orbit={orbit} setOrbit={setOrbit} handleOrbit={handleOrbit} />} />
        <Route path='earth' element={<Earth overview={overview} setOverview={setOverview} handleOverview={handleOverview} surface={surface} setSurface={setSurface} handleSurface={handleSurface} atmosphere={atmosphere} setAtmosphere={setAtmosphere} handleAtmosphere={handleAtmosphere} orbit={orbit} setOrbit={setOrbit} handleOrbit={handleOrbit} />} />
        <Route path='Mars' element={<Mars overview={overview} setOverview={setOverview} handleOverview={handleOverview} surface={surface} setSurface={setSurface} handleSurface={handleSurface} atmosphere={atmosphere} setAtmosphere={setAtmosphere} handleAtmosphere={handleAtmosphere} orbit={orbit} setOrbit={setOrbit} handleOrbit={handleOrbit} />} />
        <Route path='jupiter' element={<Jupiter overview={overview} setOverview={setOverview} handleOverview={handleOverview} surface={surface} setSurface={setSurface} handleSurface={handleSurface} atmosphere={atmosphere} setAtmosphere={setAtmosphere} handleAtmosphere={handleAtmosphere} orbit={orbit} setOrbit={setOrbit} handleOrbit={handleOrbit} />} />
        <Route path ='saturn' element={<Saturn overview={overview} setOverview={setOverview} handleOverview={handleOverview} surface={surface} setSurface={setSurface} handleSurface={handleSurface} atmosphere={atmosphere} setAtmosphere={setAtmosphere} handleAtmosphere={handleAtmosphere} orbit={orbit} setOrbit={setOrbit} handleOrbit={handleOrbit} />} />
        <Route path='uranus' element={<Uranus overview={overview} setOverview={setOverview} handleOverview={handleOverview} surface={surface} setSurface={setSurface} handleSurface={handleSurface} atmosphere={atmosphere} setAtmosphere={setAtmosphere} handleAtmosphere={handleAtmosphere} orbit={orbit} setOrbit={setOrbit} handleOrbit={handleOrbit} />} />
        <Route path='Neptune' element={<Neptune overview={overview} setOverview={setOverview} handleOverview={handleOverview} surface={surface} setSurface={setSurface} handleSurface={handleSurface} atmosphere={atmosphere} setAtmosphere={setAtmosphere} handleAtmosphere={handleAtmosphere} orbit={orbit} setOrbit={setOrbit} handleOrbit={handleOrbit} />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
