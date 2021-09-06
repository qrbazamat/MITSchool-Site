import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/Navbar.css';
import Logo from './image/logo-it-park.png';

function Navbar(props) {
    const [menuOpen, setMenuOpen] = useState(!1)

    return (
        <div className='nav-container'
        >
            <div className='logo'>
                <NavLink
                    exact
                    to='/'
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
                    >
                        Asosiy
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to='/about'
                    >
                        Biz haqimizda
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to='/contact'
                    >
                        Bog'lanish
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to='/line-chart'
                    >
                        Statistika
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to='/auth/sign-in'
                    >
                        Kirish
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;