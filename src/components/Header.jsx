// src/components/Header.jsx
import React from 'react';

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <header>
      <div className="logo">
        <h1 className='title'>OT Valet Parking</h1>
      </div>
      <nav>
        <ul className="navbar">
          <li className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}>Inicio</li>
          <li className={activeTab === 'about' ? 'active' : ''} onClick={() => setActiveTab('about')}>¿Quiénes somos?</li>
          <li className={activeTab === 'services' ? 'active' : ''} onClick={() => setActiveTab('services')}>Nuestros servicios</li>
          <li className={activeTab === 'why' ? 'active' : ''} onClick={() => setActiveTab('why')}>¿Por qué elegirnos?</li>
          <li className={activeTab === 'gallery' ? 'active' : ''} onClick={() => setActiveTab('gallery')}>Galería</li>
          <li className={activeTab === 'clients' ? 'active' : ''} onClick={() => setActiveTab('clients')}>Algunos de nuestros clientes</li>
          <li className={activeTab === 'contact' ? 'active' : ''} onClick={() => setActiveTab('contact')}>Contáctanos</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

