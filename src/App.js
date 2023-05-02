import { HashRouter, Route, Routes } from 'react-router-dom';

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
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mercury' element={<Mercury />} />
        <Route path='venus' element={<Venus />} />
        <Route path='earth' element={<Earth />} />
        <Route path='Mars' element={<Mars />} />
        <Route path='jupiter' element={<Jupiter />} />
        <Route path ='saturn' element={<Saturn />} />
        <Route path='uranus' element={<Uranus />} />
        <Route path='Neptune' element={<Neptune />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
