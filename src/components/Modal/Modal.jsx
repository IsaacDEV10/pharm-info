import React from "react";
import './Modal.css';

const Modal = ({ show, onClose, title, description }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Modal;

