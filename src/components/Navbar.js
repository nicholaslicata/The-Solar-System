import { Link } from 'react-router-dom';

function Navbar({ toggleNav, navActive, closeNav }) {
    return (
        <header className='navbar-container'>
            <div className='logo-container'>
                <Link onClick={closeNav} className='logo' to='/'>The Solar System</Link>
            </div>
            <nav className={navActive ? 'nav-active' : 'nav'}>
                <Link onClick={closeNav} className='nav-link' to='mercury'>Mercury</Link>
                <Link onClick={closeNav} className='nav-link' to='venus'>Venus</Link>
                <Link onClick={closeNav} className='nav-link' to='earth'>Earth</Link>
                <Link onClick={closeNav} className='nav-link' to='mars'>Mars</Link>
                <Link onClick={closeNav} className='nav-link' to='jupiter'>Jupiter</Link>
                <Link onClick={closeNav} className='nav-link' to='saturn'>Saturn</Link>
                <Link onClick={closeNav} className='nav-link' to='uranus'>Uranus</Link>
                <Link onClick={closeNav} className='nav-link' to='neptune'>Neptune</Link> 
            </nav>
            <div className='hamburger-btn' onClick={toggleNav}>
                <span className='hamburger-line'></span>
                <span className='hamburger-line'></span>
                <span className='hamburger-line'></span>
            </div>
        </header>
    )
}

export default Navbar;