import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className='navbar-container'>
            <div className='logo-container'>
                <Link className='logo' to='/'>The Solar System</Link>
            </div>
            <nav>
                <Link className='nav-link' to='mercury'>Mercury</Link>
                <Link className='nav-link' to='venus'>Venus</Link>
                <Link className='nav-link' to='earth'>Earth</Link>
                <Link className='nav-link' to='mars'>Mars</Link>
                <Link className='nav-link' to='jupiter'>Jupiter</Link>
                <Link className='nav-link' to='saturn'>Saturn</Link>
                <Link className='nav-link' to='uranus'>Uranus</Link>
                <Link className='nav-link' to='neptune'>Neptune</Link> 
            </nav>
            <div className='hamburger-btn'>
                <span className='hamburger-line'></span>
                <span className='hamburger-line'></span>
                <span className='hamburger-line'></span>
            </div>
        </header>
    )
}

export default Navbar;