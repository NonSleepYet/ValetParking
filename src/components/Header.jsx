import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header className="encabezado">
            <Link className='enlace' to="/login">Login</Link>
            <Link className='enlace' to="/register">Register</Link>
            <Link className='enlace' to="/dashboard">Panel</Link>
        </header>
    )

}

export default Header;