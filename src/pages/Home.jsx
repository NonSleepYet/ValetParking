import Header from '../components/Header';
import './Home.css';

const Home = () => {
    return (
        <section className="home">
            <Header />
            <div className="content">
                <h1>Bienvenido a nuestra aplicación</h1>
                <p>Explora nuestros servicios y conoce más sobre nosotros.</p>
            </div>
        </section>
    );
};

export default Home;
