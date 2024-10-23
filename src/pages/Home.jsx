import Header from '../components/Header';

import './Home.css';

const Home = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <section className="home encabezado">
                <div className="content">
                    <h1>Bienvenido a nuestra aplicación</h1>
                    <p>Explora nuestros servicios y conoce más sobre nosotros.</p>
                </div>
            </section></div>

    );
};

export default Home;
