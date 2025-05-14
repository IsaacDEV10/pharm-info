import React from 'react';
import './Pesquisa.css';

const Pesquisa = ({ searchTerm, setSearchTerm }) => {
  return (
    <div id='pesquisa'  className="search-box">
      <input
        type="text"
        placeholder="Buscar medicamento..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default Pesquisa;