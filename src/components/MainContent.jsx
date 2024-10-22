// src/components/MainContent.jsx
import React from 'react';

const MainContent = () => {
  return (
    <main>
      <section id="home">
        <h2>Bienvenidos a OT Valet Parking</h2>
        <p>Ofrecemos un servicio de valet parking profesional y seguro.</p>
      </section>

      <section id="services">
        <h2>Nuestros Servicios</h2>
        <ul>
          <li>Servicio de valet parking para eventos</li>
          <li>Administración de estacionamientos</li>
          <li>Monitoreo y seguridad</li>
        </ul>
      </section>

      <section id="about">
        <h2>Sobre Nosotros</h2>
        <p>Somos una empresa con años de experiencia en ofrecer el mejor servicio de valet parking.</p>
      </section>
    </main>
  );
};

export default MainContent;
