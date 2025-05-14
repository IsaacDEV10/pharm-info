import React, { useState } from 'react';
import './App.css';

import BottomNav from './components/BottomNav/BottomNav';
import Card from './components/Card/Card';
import Sobre from './components/Sobre/Sobre';
import Pesquisa from './components/Pesquisa/Pesquisa';
import Logo from './assets/farmacia.png';

const App = () => {
  const [mostrarBusca, setMostrarBusca] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <header>
        <h2>Pharm Info</h2>
      </header>

      {mostrarBusca && (
        <Pesquisa
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      )}

      <Sobre />
      <Card searchTerm={searchTerm} />

      <BottomNav setMostrarBusca={setMostrarBusca} />

      <div className='footer'>
        <img src={Logo} alt="logo" />
        <p>© 2025 Isaac Luiz, Dev FullStack</p>
      </div>
    </>
  );
};

export default App;