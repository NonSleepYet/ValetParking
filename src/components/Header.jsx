import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="encabezado">
            <div className='logo'>
                <img src="public/logo.jpg" alt="Logo" className="logo-icon" />
            </div>
            <Link className='enlace' to="/">Inicio</Link>
            <Link className='enlace' to="/about">¿Quiénes Somos?</Link>
            <Link className='enlace' to="/services">Servicios</Link>
            <Link className='enlace' to="/choose-us">¿Por Qué Elegirnos?</Link>
            <Link className='enlace' to="/galery">Galería</Link>
            <Link className='enlace' to="/clients">Clientes</Link>
            <Link className='enlace' to="/contact">Contáctanos</Link>

        </header>
    );
}

export default Header;
