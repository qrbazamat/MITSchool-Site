import { useState } from 'react';
import Bounce from 'react-reveal/Bounce';
import { NavLink, useLocation } from 'react-router-dom';
import '../Styles/Navbar.css';
import Logo from '../image/IT-Center-Logo.svg';
import AppsIcon from '../image/Apps-Icon/apps.svg'

function Navbar(props) {
    const [menuOpen, setMenuOpen] = useState(!1)
    const location = useLocation()

    const appsNav = location.pathname === '/apps' ? 'apps-nav' : '';

    return (
        <div className={`nav-container ${appsNav}`} id='Top'
        >
            <div className='logo'>
                <NavLink
                    exact
                    to='/'
                    onClick={() => menuOpen ? setMenuOpen(!menuOpen) : 0}
                >
                    <img src={Logo} width='100%' alt="Logo" />
                </NavLink>
            </div>

            <div></div>

            <NavLink
                exact
                to='/apps'
            >
                <div className="apps-logo">
                    <img src={AppsIcon} width='100%' alt="Apps Logo" />
                </div>
            </NavLink>

            <div className='navbar-container'>
                <ul className={`Navbar ${menuOpen ? 'open' : ''}`}>
                    <li>
                        <NavLink
                            exact
                            to='/'
                            onClick={() => menuOpen ? setMenuOpen(!menuOpen) : 0}
                        >

                            <Bounce left duration={3000}>
                                Asosiy
                            </Bounce>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to='/about'
                            onClick={() => menuOpen ? setMenuOpen(!menuOpen) : 0}
                        >
                            <Bounce left duration={2500}>
                                Biz haqimizda
                            </Bounce>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to='/contact'
                            onClick={() => menuOpen ? setMenuOpen(!menuOpen) : 0}
                        >
                            <Bounce left duration={2000}>
                                Bog'lanish
                            </Bounce>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to='/line-chart'
                            onClick={() => menuOpen ? setMenuOpen(!menuOpen) : 0}
                        >
                            <Bounce left duration={1500}>
                                Statistika
                            </Bounce>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to='/auth/sign-in'
                            onClick={() => menuOpen ? setMenuOpen(!menuOpen) : 0}
                        >
                            <Bounce left duration={1000}>
                                Kirish
                            </Bounce>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div
                className={`menu-btn ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <div
                    className='menu-btn-burger'></div>
            </div>
        </div>
    )
}

export default Navbar;