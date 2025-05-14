import { FaPills, FaInfoCircle, FaSearch } from 'react-icons/fa';
import './BottomNav.css';

const BottomNav = ({ setMostrarBusca }) => {
  const handleBuscaClick = () => {
    setMostrarBusca((prev) => !prev);
    setTimeout(() => {
      const el = document.getElementById('pesquisa');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100); 
  };

  return (
    <nav className="bottom-nav">
      <div className="nav-item">
        <FaPills />
        <a href="#medi">Medicamentos</a>
      </div>
      <div className="nav-item">
        <FaInfoCircle />
        <a href="#sobre">Sobre</a>
      </div>
      <div 
        className="nav-item"
        onClick={handleBuscaClick}
        style={{ cursor: 'pointer' }}
      >
        <FaSearch />
        <span>Pesquisa</span>
      </div>
    </nav>
  );
};

export default BottomNav;

