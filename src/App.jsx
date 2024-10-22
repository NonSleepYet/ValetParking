// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Footer from './components/Footer';
import './styles/main.css';


const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <Tabs activeTab={activeTab} />
      <Footer />
    </div>
  );
};

export default App;

