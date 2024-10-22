// src/components/Tabs.jsx
import React from 'react';

const Tabs = ({ activeTab }) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div>
            <h2>Bienvenidos a OT Valet Parking</h2>
            <p>Ofrecemos un servicio de valet parking profesional y seguro.</p>
          </div>
        );
      case 'about':
        return (
          <div>
            <h2>¿Quiénes somos?</h2>
            <p>Somos una empresa con años de experiencia en ofrecer el mejor servicio de valet parking.</p>
          </div>
        );
      case 'services':
        return (
          <div>
            <h2>Nuestros Servicios</h2>
            <ul>
              <li>Servicio de valet parking para eventos</li>
              <li>Administración de estacionamientos</li>
              <li>Monitoreo y seguridad</li>
            </ul>
          </div>
        );
      case 'why':
        return (
          <div>
            <h2>¿Por qué elegirnos?</h2>
            <p>Contamos con personal capacitado y tecnología avanzada para asegurar la mejor experiencia.</p>
          </div>
        );
      case 'gallery':
        return (
          <div>
            <h2>Galería</h2>
            <p>Aquí puedes ver fotos de algunos de nuestros eventos y servicios.</p>
          </div>
        );
      case 'clients':
        return (
          <div>
            <h2>Algunos de nuestros clientes</h2>
            <p>Hemos trabajado con empresas de renombre a nivel local e internacional.</p>
          </div>
        );
      case 'contact':
        return (
          <div>
            <h2>Contáctanos</h2>
            <p>Puedes contactarnos al <strong>(555) 123-4567</strong> o escribirnos a <a href="mailto:contacto@otvaletparking.com">contacto@otvaletparking.com</a>.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="tab-content">{renderTabContent()}</div>;
};

export default Tabs;
