import React from "react";
import "./Sobre.css";
import Logo from "../../assets/farmacia.png";

const Sobre = () => {
  return (
    <section className="hero-container" id="sobre">
      <div className="hero-content">
        <h2>Seja Bem-vindo(a)!</h2>
        <p>
        A toxicologia clínica é a área da medicina que dedica ao diagnóstico, tratamento e prevenção de intoxicação em seres humanos. <br /> Ela atua em casos de exposição a medicamentos (por superdosagem intencional ou acidental), drogas de abuso, produtos domésticos, alimentos contaminados e substâncias industriais. 
Em situação de intoxicação, é fundamental procurar atendimento médico de emergência imediatamente. <br />Entre em contato com SAMU (192), BOMBEIROS (193) ou POLÍCIA (190).
        </p>
      </div>
      <div className="hero-img">
        <div>
          <img  src={Logo} alt="Isaac" />
        </div>   
      </div>
    </section>
  );
};

export default Sobre;
