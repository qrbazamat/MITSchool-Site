import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/Navbar.css';
import Logo from './image/IT-Center-Logo.svg';

function Navbar(props) {
    const [menuOpen, setMenuOpen] = useState(!1)

    return (
        <div className='nav-container'
        >
            <div className='logo'>
                <NavLink
                    exact
                    to='/'
                    onClick={() => menuOpen? setMenuOpen(!menuOpen):0}
                >
                    <img src={Logo} width='100%' alt="Logo" />
                </NavLink>
            </div>

            <div
                className={`menu-btn ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <div
                    className='menu-btn-burger'></div>
            </div>

            <ul className={`Navbar ${menuOpen ? 'open' : ''}`}>
                <li>
                    <NavLink
                        exact
                        to='/'
                        onClick={() => menuOpen? setMenuOpen(!menuOpen):0}
                    >
                        Asosiy
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to='/about'
                        onClick={() => menuOpen? setMenuOpen(!menuOpen):0}
                    >
                        Biz haqimizda
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to='/contact'
                        onClick={() => menuOpen? setMenuOpen(!menuOpen):0}
                    >
                        Bog'lanish
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to='/line-chart'
                        onClick={() => menuOpen? setMenuOpen(!menuOpen):0}
                    >
                        Statistika
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to='/auth/sign-in'
                        onClick={() => menuOpen? setMenuOpen(!menuOpen):0}
                    >
                        Kirish
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;