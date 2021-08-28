import { Link } from 'react-router-dom';
import './Styles/Navbar.css';

function Navbar() {
    return (
        <ul className='Navbar'>
            <li>
                <Link to='/'>Asosiy</Link>
            </li>
            <li>
                <Link to='/about'>Biz haqimizda</Link>
            </li>
            <li>
                <Link to='/contact'>Bog'lanish</Link>
            </li>
            <li>
                <Link to='/line-chart'>Statistika</Link>
            </li>
        </ul>
    )
}

export default Navbar;