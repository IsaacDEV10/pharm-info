import React, { useState } from "react";
import './Card.css';
import Modal from '../../components/Modal/Modal';
import Advil from '../../assets/advil.png';
import Ass from '../../assets/ass.png';
import Betametasona from '../../assets/betametasona.png';
import Bisacodil from '../../assets/bisacodil.png';
import Cetoprofeno from '../../assets/cetoprofeno.png';
import Dexametasona from '../../assets/dexametasona.png';
import Diclofenaco from '../../assets/diclofenaco.png';
import Dipirona from '../../assets/dipirona.png';
import Glibenclamida from '../../assets/glibenclamida.png';
import Gliclazida from '../../assets/glicazida.png';
import Hidrocortisona from '../../assets/hidrocortisona.png';
import Ibuprofeno from '../../assets/ibuprofeno.png';
import LeiteDeMagnesia from '../../assets/leite-de-magnesia.png';
import Melhoral from '../../assets/melhoral.png';
import Meloxicam from '../../assets/meloxicam.png';
import Metformina from '../../assets/metformina.png';
import Metilprednisolona from '../../assets/metilprednisolona.png';
import Minilax from '../../assets/minilax.png';
import Nimesulida from '../../assets/nimesulida.png';
import Paracetamol from '../../assets/paracetamol.png';
import Pioglitazona from '../../assets/pioglitazona.png';
import Polietilenoglicol from '../../assets/polietilenoglicol.png';
import Prednisona from '../../assets/prednisona.png';
import Psyllium from '../../assets/psyllium.png';
import Sitagliptina from '../../assets/sitagliptina.png';
import VitaminaA from '../../assets/vitamina-a.png';
import VitaminaB6 from '../../assets/vitamina-b6.png';
import VitaminaC from '../../assets/vitamina-c.png';
import VitaminaD from '../../assets/vitamina-d.png';
import VitaminaE from '../../assets/vitamina-e.png';

import Loperamida from '../../assets/loperamida.png';
import Racecadotrila from '../../assets/racecadotrila.png';
import Bismuto from '../../assets/bismuto.png';
import Pectina from '../../assets/pectina.png';
import Atapulgita from '../../assets/atapulgita.png';
import HidroxidodeAluminio from '../../assets/hidroxido-de-aluminio.png';
import CarbonatodeCalcio from '../../assets/carbonato-de-calcio.png';
import Bicarbonato from '../../assets/bicarbonato.png';
import Pantoprazol from '../../assets/pantoprazol.png';
import Ranitidina from '../../assets/ranitidina.png';
import Dextrometorfano from '../../assets/dextrometorfano.png';
import Codeina from '../../assets/codeina.png';
import Levodropropizina from '../../assets/levodropropizina.png';
import Dropropizina from '../../assets/dropropizina.png';
import Clobutinol from '../../assets/clobutinol.png';




const medicamentos = [
  { nome: 'Paracetamol', imagem: Paracetamol, descricao: 'ACETAMINOFENO' },
  { nome: 'Dipirona', imagem: Dipirona, descricao: 'metamizol sódico' },
  { nome: 'Ibuprofeno', imagem: Ibuprofeno, descricao: 'propanoic acid' },
  { nome: 'Melhoral', imagem: Melhoral, descricao: 'Salvia microphylla' },
  { nome: 'Ass', imagem: Ass, descricao: 'Ácido Acetilsalicílico' },

  // Laxantes
  { nome: 'Psyllium', imagem: Psyllium, descricao: 'Plantago ovata' },
  { nome: 'Polietilenoglicol', imagem: Polietilenoglicol, descricao: 'óxido de polietileno' },
  { nome: 'Bisacodil', imagem: Bisacodil, descricao: 'Piridilmetileno' },
  { nome: 'Leite de Magnésia', imagem: LeiteDeMagnesia, descricao: 'Magnesium hydroxide' },
  { nome: 'Minilax', imagem: Minilax, descricao: 'sorbitol laurilsulfato de sódio' },

  // Vitaminas
  { nome: 'Vitamina A', imagem: VitaminaA, descricao: 'Retinol' },
  { nome: 'Vitamina D', imagem: VitaminaD, descricao: 'Colecalciferol' },
  { nome: 'Vitamina E', imagem: VitaminaE, descricao: 'Tocoferol' },
  { nome: 'Vitamina C', imagem: VitaminaC, descricao: 'Ácido ascórbico' },
  { nome: 'Vitamina B6', imagem: VitaminaB6, descricao: 'Piridoxina' },

  // Corticoides
  { nome: 'Prednisona', imagem: Prednisona, descricao: 'Fosfato Sódico Prednisolona' },
  { nome: 'Dexametasona', imagem: Dexametasona, descricao: 'Duo-decadron' },
  { nome: 'Hidrocortisona', imagem: Hidrocortisona, descricao: 'acetato de hidrocortisona' },
  { nome: 'Betametasona', imagem: Betametasona, descricao: 'Celestamine' },
  { nome: 'Metilprednisolona', imagem: Metilprednisolona, descricao: 'Solu-Medrol' },

  // Anti-inflamatórios
  { nome: 'Advil', imagem: Advil, descricao: 'propanoic acid' },
  { nome: 'Diclofenaco', imagem: Diclofenaco, descricao: 'dichloroanilino' },
  { nome: 'Nimesulida', imagem: Nimesulida, descricao: 'Nimesilam' },
  { nome: 'Cetoprofeno', imagem: Cetoprofeno, descricao: 'Profenid Retard' },
  { nome: 'Meloxicam', imagem: Meloxicam, descricao: 'Bioflac' },

  // Hipoglicemiantes
  { nome: 'Metformina', imagem: Metformina, descricao: 'Glucophage' },
  { nome: 'Glibenclamida', imagem: Glibenclamida, descricao: 'DAONIL' },
  { nome: 'Gliclazida', imagem: Gliclazida, descricao: 'Diamicron' },
  { nome: 'Pioglitazona', imagem: Pioglitazona, descricao: 'cloridrato de pioglitazona' },
  { nome: 'Sitagliptina', imagem: Sitagliptina, descricao: 'Fosfato de Sitagliptina' },

  // Antidiarreicos
  { nome: 'Loperamida', imagem: Loperamida, descricao: 'Hidrocloreto de Loperamida' },
  { nome: 'Racecadotrila', imagem: Racecadotrila, descricao: 'Inibidor da encefalinase' },
  { nome: 'Subsalicilato de Bismuto', imagem: Bismuto, descricao: 'Salicilato com ação antiácida e antibacteriana' },
  { nome: 'Caulim + Pectina', imagem: Pectina, descricao: 'Adsorventes intestinais naturais' },
  { nome: 'Atapulgita', imagem: Atapulgita, descricao: 'Silicato de magnésio hidratado' },

  // Antiácidos
  { nome: 'Hidróxido de Alumínio + Magnésio', imagem: HidroxidodeAluminio, descricao: 'Antiácido composto' },
  { nome: 'Carbonato de Cálcio', imagem: CarbonatodeCalcio, descricao: 'Antiácido e suplemento de cálcio' },
  { nome: 'Bicarbonato de Sódio', imagem: Bicarbonato, descricao: 'Antiácido alcalinizante' },
  { nome: 'Pantoprazol', imagem: Pantoprazol, descricao: 'Inibidor de bomba de prótons' },
  { nome: 'Ranitidina', imagem: Ranitidina, descricao: 'Antagonista H2 (uso restrito)' },

  // Antitussígenos
  { nome: 'Dextrometorfano', imagem: Dextrometorfano, descricao: 'Supressor da tosse seca' },
  { nome: 'Codeína', imagem: Codeina, descricao: 'Antitussígeno opioide' },
  { nome: 'Levodropropizina', imagem: Levodropropizina, descricao: 'Antitussígeno periférico' },
  { nome: 'Dropropizina', imagem: Dropropizina, descricao: 'Tosse alérgica e inflamatória' },
  { nome: 'Clobutinol', imagem: Clobutinol, descricao: 'Uso limitado em alguns países' }
];


const Card = ({ searchTerm = "" }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ title: '', description: '' });

  const handleOpenModal = (title, description) => {
    setModalData({ title, description });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const filtrados = medicamentos.filter(m =>
    m.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
      <h2 id="medi">Medicamentos</h2>
      {!searchTerm && (
        <section>
          <h1>Antigripais</h1>
          <div className="card-container" >
            <div className="card-content">
              <div className="card">
                <img src={Paracetamol} alt="private" className="img-assets" />
                <h3>Paracetamol</h3>
                <p>ACETAMINOFENO</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal(
                      "Paracetamol",
                      "Para que serve:\n- Dor e febre\n\nEfeitos colaterais:\n- Náusea\n- Erupção cutânea\n- Lesão hepática (rara)\n\nSintomas de intoxicação:\n- Náuseas intensas\n- Sudorese\n- Dor abdominal\n- Icterícia"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Dipirona} alt="" className="img-assets" />
                <h3>Dipirona</h3>
                <p>metamizol sódico</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Dipirona",
                      "Para que serve:\n- Dor e febre\n\nEfeitos colaterais:\n- Reações alérgicas\n- Hipotensão\n- Agranulocitose (rara)\n\nSintomas de intoxicação:\n- Tontura\n- Queda de pressão\n- Dificuldade para respirar\n- Febre persistente"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Ibuprofeno} alt="private" className="img-assets" />
                <h3>Ibuprofeno</h3>
                <p>propanoic acid</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Ibuprofeno",
                      "Para que serve:\n- Dor\n- Febre\n- Inflamação\n\nEfeitos colaterais:\n- Dor de estômago\n- Azia\n- Náusea\n- Tontura\n\nSintomas de intoxicação:\n- Sangramento gastrointestinal\n- Vômitos com sangue\n- Confusão mental\n- Insuficiência renal"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Melhoral} alt="" className="img-assets" />
                <h3>Melhoral</h3>
                <p>Salvia microphylla</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Melhoral (AAS + cafeína)",
                      "Para que serve:\n- Dor e febre leve\n\nEfeitos colaterais:\n- Irritação gástrica\n- Zumbido\n- Insônia\n\nSintomas de intoxicação:\n- Náusea\n- Vômitos\n- Zumbido\n- Respiração acelerada\n- Sangramentos"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Ass} alt="" className="img-assets" />
                <h3>Ass</h3>
                <p>Ácido Acetilsalicílico</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Ácido Acetilsalicílico (AAS)",
                      "Para que serve:\n- Alivia a dor e reduz febren\n\nEfeitos colaterais:\n- Irritação gástrica\n- Hemorragias\n- Tontura\n\nSintomas de intoxicação:\n- Náusea\n- Vômitos\n- Zumbido\n- Respiração acelerada\n- Sangramentos"
                    );
                  }}>Sobre</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {!searchTerm && (
        <section>
          <h1>Laxantes</h1>
          <div className="card-container-2" id="work-2">
            <div className="card-content">
              <div className="card">
                <img src={Psyllium} alt="private" className="img-assets" />
                <h3>Psyllium</h3>
                <p>Plantago ovata</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Psyllium",
                      "Para que serve:\n- Regula o intestino com fibras\n\nEfeitos colaterais:\n- Inchaço\n- Gases\n- Cólicas leves\n\nSintomas de intoxicação:\n- Obstrução intestinal (uso inadequado ou sem água suficiente)"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Polietilenoglicol} alt="" className="img-assets" />
                <h3>Polietilenoglicol</h3>
                <p>óxido de polietileno</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Polietilenoglicol (PEG 3350)",
                      "Para que serve:\n- Amolece fezes e estimula evacuação\n\nEfeitos colaterais:\n- Cólicas\n- Diarreia\n- Náusea\n\nSintomas de intoxicação:\n- Diarreia intensa\n- Desidratação\n- Desequilíbrio eletrolítico"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Bisacodil} alt="private" className="img-assets" />
                <h3>Bisacodil</h3>
                <p>Piridilmetileno</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Bisacodil (Dulcolax)",
                      "Para que serve:\n- Estimula o intestino\n\nEfeitos colaterais:\n- Cólicas abdominais\n- Diarreia\n\nSintomas de intoxicação:\n- Cãibras intensas\n- Perda de água e eletrólitos"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={LeiteDeMagnesia} alt="" className="img-assets" />
                <h3>Leite de Magnésia</h3>
                <p>Magnesium hydroxide</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Leite de Magnésia",
                      "Para que serve:\n- Laxante osmótico suave\n\nEfeitos colaterais:\n- Diarreia\n- Dor abdominal\n- Náusea\n\nSintomas de intoxicação:\n- Hipermagnesemia: fraqueza, confusão, batimento cardíaco lento"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Minilax} alt="" className="img-assets" />
                <h3>Minilax</h3>
                <p>sorbitol laurilsulfato de sódio</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Minilax (Sorbitol)",
                      "Para que serve:\n- Supositório com ação rápida\n\nEfeitos colaterais:\n- Irritação retal\n- Cólicas\n\nSintomas de intoxicação:\n- Diarreia grave\n- Dor intensa no reto"
                    );
                  }}>Sobre</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {!searchTerm && (
        <section>
          <h1>Vitaminas</h1>
          <div className="card-container-2" id="work-2">
            <div className="card-content">
              <div className="card">
                <img src={VitaminaA} alt="private" className="img-assets" />
                <h3>Vitamina A</h3>
                <p>Retinol</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Vitamina A (Retinol)",
                      "Sintomas de intoxicação:\n- Aguda: náuseas, vômitos, dor de cabeça, visão turva, sonolência\n- Crônica: hepatotoxicidade, queda de cabelo, pele seca, hipertensão intracraniana, dor óssea\n\nConduta:\n- Interrupção imediata do uso\n- Se ingestão for recente (menos de 1h), carvão ativado pode ser considerado\n- Monitorar sinais neurológicos e função hepática\n- Tratamento sintomático: antieméticos, controle da pressão intracraniana\n- Encaminhamento hospitalar em casos graves"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={VitaminaD} alt="" className="img-assets" />
                <h3>Vitamina D</h3>
                <p>Colecalciferol</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Vitamina D (Colecalciferol ou Ergocalciferol)",
                      "Sintomas de intoxicação:\n- Hipercalcemia (fraqueza, constipação, vômitos, confusão)\n- Poliúria, desidratação, insuficiência renal, arritmias\n\nConduta:\n- Suspender imediatamente o suplemento\n- Hidratação vigorosa com soro fisiológico EV\n- Uso de diuréticos de alça (ex: furosemida) para reduzir o cálcio\n- Monitoramento eletrolítico e da função renal\n- Em casos severos: calcitonina ou bisfosfonatos podem ser usados\n- Internação indicada se cálcio > 14 mg/dL ou com sintomas neurológicos"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={VitaminaE} alt="private" className="img-assets" />
                <h3>Vitamina E</h3>
                <p>Tocoferol</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Vitamina E (Tocoferol)",
                      "Sintomas de intoxicação:\n- Risco de hemorragias (especialmente com anticoagulantes)\n- Náuseas, fadiga, visão turva\n\nConduta:\n- Suspender imediatamente a vitamina\n- Avaliar coagulação (TP, TTPa, INR)\n- Monitorar sinais de sangramento (sangue na urina, fezes, hemorragias mucosas)\n- Em caso de sangramentos graves, pode ser necessário vitamina K\n- Evitar uso concomitante com anticoagulantes/antiagregantes"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={VitaminaC} alt="" className="img-assets" />
                <h3>Vitamina C</h3>
                <p>Ácido ascórbico</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Vitamina C (Ácido ascórbico)",
                      "Sintomas de intoxicação:\n- Náuseas, diarreia, dor abdominal\n- Cálculos renais (oxalato), acidose metabólica (raro)\n\nConduta:\n- Interromper o uso\n- Hidratar o paciente para prevenir cálculo renal\n- Alcalinização da urina (bicarbonato de sódio) se houver risco de cálculos ou acidose\n- Monitorar função renal e urinária\n- Raramente requer hospitalização, exceto em nefropatias prévias"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={VitaminaB6} alt="" className="img-assets" />
                <h3>Vitamina B6</h3>
                <p>Piridoxina</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Vitamina B6 (Piridoxina)",
                      "Sintomas de intoxicação (doses crônicas > 200 mg/dia):\n- Neuropatia periférica (formigamento, dormência, perda de coordenação), ataxia\n\nConduta:\n- Suspender a suplementação imediatamente\n- Avaliação neurológica (reflexos, sensibilidade, equilíbrio)\n- A neuropatia geralmente é reversível com a interrupção do uso, mas pode levar semanas a meses\n- Em casos de desequilíbrio funcional, pode ser necessária fisioterapia neurológica"
                    );
                  }}>Sobre</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {!searchTerm && (
        <section>
          <h1>Corticoides</h1>
          <div className="card-container-2" id="work-2">
            <div className="card-content">
              <div className="card">
                <img src={Prednisona} alt="private" className="img-assets" />
                <h3>Prednisona</h3>
                <p>Fosfato Sódico Prednisolona</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Prednisona",
                      "Para que serve:\n- Anti-inflamatório e imunossupressor\n- Usado em doenças autoimunes, asma, artrite reumatoide, lúpus, alergias severas\n\nContraindicações:\n- Infecções fúngicas sistêmicas\n- Hipersensibilidade ao fármaco\n- Uso com vacinas vivas\n\nEfeitos colaterais comuns:\n- Ganho de peso\n- Insônia\n- Aumento da glicose\n- Hipertensão\n- Osteoporose\n- Retenção de líquidos\n- Distúrbios psiquiátricos\n\nSintomas de intoxicação:\n- Hiperglicemia\n- Confusão mental\n- Edema\n- Fraqueza muscular\n- Sangramento digestivo\n- Psicose\n- Hipertensão severa\n\nArmazenamento:\n- Temperatura ambiente (15–30 °C), longe da luz e umidade"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Dexametasona} alt="" className="img-assets" />
                <h3>Dexametasona</h3>
                <p>Duo-decadron</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Dexametasona",
                      "Para que serve:\n- Anti-inflamatório potente\n- Usado em choque anafilático, edema cerebral, COVID-19 grave, doenças autoimunes, quimioterapia\n\nContraindicações:\n- Infecções fúngicas sistêmicas\n- Alergia ao fármaco\n- Gravidez (uso prolongado ou altas doses)\n\nEfeitos colaterais comuns:\n- Imunossupressão\n- Insônia\n- Alterações de humor\n- Aumento da pressão intraocular\n- Osteoporose\n\nSintomas de intoxicação:\n- Psicose\n- Hipertensão grave\n- Hipocalemia\n- Arritmias\n- Miopatia\n- Diabetes descompensado\n\nArmazenamento:\n- Temperatura ambiente, em local seco e protegido da luz"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Hidrocortisona} alt="private" className="img-assets" />
                <h3>Hidrocortisona</h3>
                <p>acetato de hidrocortisona</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Hidrocortisona",
                      "Para que serve:\n- Tratamento de insuficiência adrenal (doença de Addison)\n- Reações alérgicas graves\n- Colite ulcerativa\n- Choque séptico\n\nContraindicações:\n- Infecções não controladas\n- Alergia ao componente\n- Uso com vacinas vivas\n\nEfeitos colaterais comuns:\n- Retenção de sal e água\n- Hiperglicemia\n- Distúrbios de humor\n- Fraqueza muscular\n\nSintomas de intoxicação:\n- Hipertensão severa\n- Edema generalizado\n- Hipocalemia\n- Delírio\n- Hiperglicemia\n\nArmazenamento:\n- Temperatura ambiente. Ampolas devem ser protegidas da luz"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Betametasona} alt="" className="img-assets" />
                <h3>Betametasona</h3>
                <p>Celestamine</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Betametasona",
                      "Para que serve:\n- Anti-inflamatório em dermatites, alergias, doenças reumáticas e respiratórias\n- Usado na gestação para maturação pulmonar fetal\n\nContraindicações:\n- Infecções sistêmicas\n- Tuberculose ativa\n- Administração intra-articular em articulações instáveis\n\nEfeitos colaterais comuns:\n- Atrofia da pele (uso tópico)\n- Supressão adrenal\n- Insônia\n- Hiperglicemia\n- Irritabilidade\n\nSintomas de intoxicação:\n- Hipertensão\n- Psicose\n- Hipocalemia\n- Alterações menstruais\n- Úlcera gástrica\n- Miopatia\n\nArmazenamento:\n- Temperatura ambiente, protegido da luz. Uso tópico deve ser mantido bem fechado"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Metilprednisolona} alt="" className="img-assets" />
                <h3>Metilprednisolona</h3>
                <p>Solu-Medrol</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Metilprednisolona",
                      "Para que serve:\n- Crises de esclerose múltipla\n- Asma grave\n- Choque anafilático\n- Lúpus\n- Artrite reumatoide\n\nContraindicações:\n- Infecções fúngicas sistêmicas\n- Hipersensibilidade\n- Uso com vacinas vivas\n\nEfeitos colaterais comuns:\n- Osteoporose\n- Glaucoma\n- Aumento de apetite\n- Insônia\n- Hipertensão\n- Alterações do humor\n\nSintomas de intoxicação:\n- Psicose\n- Edema\n- Hiperglicemia grave\n- Arritmias por hipocalemia\n- Hemorragia digestiva\n\nArmazenamento:\n- Frascos e comprimidos em temperatura ambiente. Ampolas devem ficar protegidas da luz"
                    );;
                  }}>Sobre</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {!searchTerm && (
        <section>
          <h1>Anti-inflamatórios</h1>
          <div className="card-container-2" id="work-2">
            <div className="card-content">
              <div className="card">
                <img src={Advil} alt="private" className="img-assets" />
                <h3>Advil</h3>
                <p>propanoic acid</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Advil (Ibuprofeno®, Alivium®)",
                      "Para que serve:\n- Dor leve a moderada\n- Febre\n- Inflamações (musculares, dentárias, articulares)\n\nContraindicações:\n- Úlcera gástrica ativa\n- Insuficiência renal ou hepática grave\n- Gestantes no 3º trimestre\n\nEfeitos colaterais:\n- Dor de estômago\n- Náuseas\n- Tontura\n- Retenção de líquidos\n\nSintomas de intoxicação:\n- Vômitos\n- Sonolência\n- Zumbido no ouvido\n- Convulsões (em casos graves)\n\nArmazenamento:\n- Local seco, temperatura ambiente (15–30 °C), longe da luz e do alcance de crianças"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Diclofenaco} alt="" className="img-assets" />
                <h3>Diclofenaco</h3>
                <p>dichloroanilino</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Diclofenaco (Cataflam®, Voltaren®)",
                      "Para que serve:\n- Dores musculares\n- Articulares\n- Cólicas menstruais\n- Inflamações pós-operatórias\n\nContraindicações:\n- Úlcera péptica\n- Insuficiência hepática grave\n- Hipersensibilidade a AINEs\n\nEfeitos colaterais:\n- Gastrite\n- Aumento da pressão arterial\n- Tontura\n- Risco de infarto em uso prolongado\n\nSintomas de intoxicação:\n- Vômitos com sangue\n- Hipotensão\n- Convulsões\n- Coma\n\nArmazenamento:\n- Em embalagem original, em local fresco e seco, longe do calor"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Nimesulida} alt="private" className="img-assets" />
                <h3>Nimesulida</h3>
                <p>Nimesilam</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Nimesulida (Nisulid®, Nimesubal®)",
                      "Para que serve:\n- Dores agudas (como dor de dente)\n- Febre\n- Inflamações articulares\n\nContraindicações:\n- Doença hepática\n- Crianças menores de 12 anos\n- Gestantes e lactantes\n\nEfeitos colaterais:\n- Hepatotoxicidade\n- Náuseas\n- Diarreia\n\nSintomas de intoxicação:\n- Icterícia\n- Dor abdominal intensa\n- Fadiga\n- Insuficiência hepática aguda\n\nArmazenamento:\n- Temperatura inferior a 30 °C, ao abrigo de umidade e luz"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Cetoprofeno} alt="" className="img-assets" />
                <h3>Cetoprofeno</h3>
                <p>Profenid Retard</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Cetoprofeno (Profenid®)",
                      "Para que serve:\n- Inflamações reumáticas\n- Artrite\n- Dor de garganta\n- Dor pós-operatória\n\nContraindicações:\n- História de úlcera gástrica ou sangramento\n- Asma induzida por AINEs\n\nEfeitos colaterais:\n- Dor de cabeça\n- Indigestão\n- Tontura\n\nSintomas de intoxicação:\n- Náuseas intensas\n- Confusão mental\n- Sonolência\n- Dificuldade respiratória\n\nArmazenamento:\n- Local seco e protegido do calor; não guardar no banheiro"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Meloxicam} alt="" className="img-assets" />
                <h3>Meloxicam</h3>
                <p>Bioflac</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Meloxicam (Movatec®, Melox®, Maxicam®)",
                      "Para que serve:\n- Artrite reumatoide\n- Osteoartrite\n- Inflamações articulares crônicas\n\nContraindicações:\n- Úlcera gástrica ativa\n- Doença renal ou hepática grave\n\nEfeitos colaterais:\n- Tontura\n- Dispepsia\n- Aumento da pressão arterial\n\nSintomas de intoxicação:\n- Sonolência\n- Náuseas persistentes\n- Dificuldade respiratória\n- Sangramentos\n\nArmazenamento:\n- Temperatura ambiente (15–30 °C), protegido da luz"
                    );
                  }}>Sobre</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {!searchTerm && (
        <section>
          <h1>Hipoglicemiantes</h1>
          <div className="card-container-2" id="work-2">
            <div className="card-content">
              <div className="card">
                <img src={Metformina} alt="private" className="img-assets" />
                <h3>Metformina</h3>
                <p>Glucophage</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Metformina (Glifage®, Dimefor®, Glucophage®)",
                      "Para que serve:\n- Tratamento do diabetes tipo 2 (especialmente com sobrepeso)\n\nContraindicações:\n- Insuficiência renal ou hepática\n- Álcool em excesso\n- Acidose metabólica\n\nEfeitos colaterais:\n- Náuseas\n- Diarreia\n- Gosto metálico na boca\n- Perda de apetite\n\nSintomas de intoxicação:\n- Acidose láctica (fraqueza, dificuldade para respirar, dor abdominal, confusão mental)\n\nArmazenamento:\n- Local seco, temperatura ambiente (15–30 °C), longe da luz e da umidade"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Glibenclamida} alt="" className="img-assets" />
                <h3>Glibenclamida</h3>
                <p>DAONIL</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Glibenclamida (Daonil®, Glibenclamida Medley®)",
                      "Para que serve:\n- Controle do diabetes tipo 2 estimulando a liberação de insulina\n\nContraindicações:\n- Diabetes tipo 1\n- Cetoacidose diabética\n- Insuficiência hepática ou renal grave\n\nEfeitos colaterais:\n- Hipoglicemia\n- Náuseas\n- Erupções cutâneas\n\nSintomas de intoxicação:\n- Hipoglicemia grave (suor frio, tremores, desmaio, convulsões)\n\nArmazenamento:\n- Temperatura ambiente, longe da luz e da umidade"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Gliclazida} alt="private" className="img-assets" />
                <h3>Gliclazida</h3>
                <p>Diamicron</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Glicazida (Diamicron®, Glicamin®, Glizid®)",
                      "Para que serve:\n- Controle da glicemia no diabetes tipo 2, promovendo a liberação de insulina\n\nContraindicações:\n- Diabetes tipo 1\n- Insuficiência renal ou hepática grave\n\nEfeitos colaterais:\n- Hipoglicemia\n- Distúrbios gastrointestinais\n- Alergias cutâneas\n\nSintomas de intoxicação:\n- Queda brusca da glicemia\n- Confusão mental\n- Coma hipoglicêmico\n\nArmazenamento:\n- Em local fresco e seco, entre 15–30 °C, fora do alcance de crianças"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Pioglitazona} alt="" className="img-assets" />
                <h3>Pioglitazona</h3>
                <p>cloridrato de pioglitazona</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Pioglitazona (Actos®, Glustin®)",
                      "Para que serve:\n- Aumenta a sensibilidade à insulina no diabetes tipo 2\n\nContraindicações:\n- Insuficiência cardíaca\n- Doença hepática\n- Gravidez\n\nEfeitos colaterais:\n- Retenção de líquidos\n- Aumento de peso\n- Risco de fraturas\n\nSintomas de intoxicação:\n- Hipoglicemia leve (quando usada com outros hipoglicemiantes)\n\nArmazenamento:\n- Temperatura entre 15–30 °C, longe da umidade"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Sitagliptina} alt="" className="img-assets" />
                <h3>Sitagliptina</h3>
                <p>Fosfato de Sitagliptina</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Sitagliptina (Januvia®)",
                      "Para que serve:\n- Inibe a degradação de incretinas, ajudando a controlar a glicose pós-prandial\n\nContraindicações:\n- Hipersensibilidade ao princípio ativo\n- Insuficiência renal grave (com cautela)\n\nEfeitos colaterais:\n- Dor de cabeça\n- Infecções respiratórias leves\n- Náuseas\n\nSintomas de intoxicação:\n- Hipoglicemia (principalmente se associada a outros antidiabéticos)\n- Dor abdominal\n- Sonolência\n\nArmazenamento:\n- Em local seco, fresco, longe da luz direta"
                    );
                  }}>Sobre</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {!searchTerm && (
        <section>
          <h1>Antidiarreicos</h1>
          <div className="card-container-2" id="work-2">
            <div className="card-content">
              <div className="card">
                <img src={Loperamida} alt="private" className="img-assets" />
                <h3>Loperamida</h3>
                <p>Imosec</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Loperamida",
                      "Para que serve:\n- Tratamento sintomático da diarreia aguda e crônica\n\nContraindicações:\n- Infecções bacterianas\n- Colite ulcerativa grave\n- Menores de 2 anos\n- Hipersensibilidade\n\nEfeitos colaterais:\n- Prisão de ventre\n- Dor abdominal\n- Sonolência\n- Tontura\n\nSintomas de intoxicação:\n- Depressão do SNC\n- Parada respiratória\n- Arritmias\n\nArmazenamento:\n- Temperatura ambiente (15–30 °C), longe da luz e umidade"
                    );

                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Racecadotrila} alt="" className="img-assets" />
                <h3>Racecadotrila</h3>
                <p>Tiorfan</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Racecadotrila",
                      "Para que serve:\n- Tratamento da diarreia aguda em adultos e crianças\n\nContraindicações:\n- Hipersensibilidade\n- Diarreias com sangue ou febre\n\nEfeitos colaterais:\n- Dor de cabeça\n- Náusea\n- Erupções cutâneas\n\nSintomas de intoxicação:\n- Náuseas ou vômitos excessivos\n- Reações alérgicas\n\nArmazenamento:\n- Temperatura ambiente, longe de calor e umidade"
                    );
                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Bismuto} alt="private" className="img-assets" />
                <h3>Subsalicilato de Bismuto</h3>
                <p>Pepto-Bismol</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Subsalicilato de Bismuto",
                      "Para que serve:\n- Diarreia leve ou moderada\n- Desconforto gástrico\n- Náusea\n\nContraindicações:\n- Alergia a salicilatos\n- Crianças com gripe ou varicela\n- Úlceras ativas\n\nEfeitos colaterais:\n- Fezes e língua escurecidas\n- Constipação\n\nSintomas de intoxicação:\n- Zumbido\n- Confusão\n- Vômitos severos\n\nArmazenamento:\n- Local fresco e seco\n- Agitar se for forma líquida"
                    );

                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Pectina} alt="" className="img-assets" />
                <h3>Pectina</h3>
                <p>ácido poligalacturônico</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Caulim + Pectina",
                      "Para que serve:\n- Adsorvente intestinal\n- Absorve toxinas intestinais\n\nContraindicações:\n- Obstrução intestinal\n- Hipersensibilidade\n\nEfeitos colaterais:\n- Constipação\n- Inchaço abdominal\n\nSintomas de intoxicação:\n- Constipação severa\n- Dor abdominal\n\nArmazenamento:\n- Temperatura ambiente\n- Evitar umidade"
                    );

                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Atapulgita} alt="" className="img-assets" />
                <h3>Atapulgita</h3>
                <p>silicato de magnésio</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Atapulgita",
                      "Para que serve:\n- Diarreia leve\n- Adsorvente gastrointestinal\n\nContraindicações:\n- Alergia ao componente\n- Uso cauteloso em crianças\n\nEfeitos colaterais:\n- Prisão de ventre\n- Náusea leve\n\nSintomas de intoxicação:\n- Constipação severa\n- Risco de obstrução\n\nArmazenamento:\n- Temperatura ambiente\n- Longe da luz"
                    );

                  }}>Sobre</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {!searchTerm && (
        <section>
          <h1>Antiacidos</h1>
          <div className="card-container-2" id="work-2">
            <div className="card-content">
              <div className="card">
                <img src={ HidroxidodeAluminio} alt="private" className="img-assets" />
                <h3>Hidróxido de Alumínio</h3>
                <p>Aluminium hydroxide</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Hidróxido de Alumínio + Hidróxido de Magnésio",
                      "Para que serve:\n- Alívio de azia, queimação, refluxo e má digestão\n\nContraindicações:\n- Insuficiência renal grave\n- Hipersensibilidade aos componentes\n\nEfeitos colaterais:\n- Prisão de ventre (alumínio)\n- Diarreia (magnésio)\n- Náuseas\n\nSintomas em caso de intoxicação:\n- Desequilíbrio eletrolítico\n- Fraqueza muscular\n- Depressão do SNC\n\nArmazenamento:\n- Temperatura ambiente (15–30 °C), longe de umidade e luz direta"
                    );

                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={CarbonatodeCalcio} alt="" className="img-assets" />
                <h3>Carbonato de Cálcio</h3>
                <p>Calcium carbonate</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Carbonato de Cálcio",
                      "Para que serve:\n- Alívio rápido da acidez estomacal\n- Suplemento de cálcio\n\nContraindicações:\n- Hipercalcemia\n- Cálculos renais de cálcio\n- Hipersensibilidade\n\nEfeitos colaterais:\n- Constipação\n- Inchaço abdominal\n\nSintomas em caso de intoxicação:\n- Hipercalcemia\n- Confusão mental\n- Arritmias\n\nArmazenamento:\n- Lugar seco e fresco\n- Frascos bem fechados"
                    );

                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Bicarbonato} alt="private" className="img-assets" />
                <h3>Bicarbonato de Sódio</h3>
                <p>Sodium hydrogen carbonate</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Bicarbonato de Sódio",
                      "Para que serve:\n- Alívio rápido da azia e má digestão\n\nContraindicações:\n- Hipertensão\n- Insuficiência cardíaca\n- Alcalose metabólica\n\nEfeitos colaterais:\n- Gases\n- Aumento da pressão arterial\n\nSintomas em caso de intoxicação:\n- Alcalose\n- Retenção de líquidos\n\nArmazenamento:\n- Lugar seco e fresco\n- Evitar umidade"
                    );

                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Pantoprazol} alt="" className="img-assets" />
                <h3>Pantoprazol</h3>
                <p>Pyloprazol</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Pantoprazol",
                      "Para que serve:\n- Tratamento de refluxo, gastrite e úlceras gástricas\n\nContraindicações:\n- Alergia a inibidores de bomba de prótons\n\nEfeitos colaterais:\n- Dor de cabeça\n- Náusea\n- Flatulência\n\nSintomas em caso de intoxicação:\n- Vômitos\n- Confusão\n- Taquicardia\n\nArmazenamento:\n- Temperatura ambiente\n- Proteger da umidade e luz"
                    );

                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Ranitidina} alt="" className="img-assets" />
                <h3>Ranitidina</h3>
                <p>Antak</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Ranitidina",
                      "Para que serve:\n- Redução da acidez gástrica\n\n⚠️ Uso suspenso em vários países\n\nContraindicações:\n- Alergia à ranitidina\n- Uso atualmente suspenso\n\nEfeitos colaterais:\n- Dor de cabeça\n- Tontura\n- Constipação ou diarreia\n\nSintomas em caso de intoxicação:\n- Hipotensão\n- Confusão mental\n\nArmazenamento:\n- Temperatura ambiente\n- Verificar regulamentação local"
                    );

                  }}>Sobre</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {!searchTerm && (
        <section>
          <h1>Antitussigenos</h1>
          <div className="card-container-2" id="work-2">
            <div className="card-content">
              <div className="card">
                <img src={Dextrometorfano} alt="private" className="img-assets" />
                <h3>Dextrome <br />torfano</h3>
                <p>bromidrato de dextrometorfano</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Dextrometorfano",
                      "Para que serve:\n- Supressor da tosse seca (não produtiva), principalmente à noite\n\nContraindicações:\n- Crianças menores de 6 anos\n- Uso com inibidores da monoaminoxidase (IMAO)\n- Hipersensibilidade ao componente\n\nEfeitos colaterais:\n- Sonolência\n- Tontura\n- Náuseas\n- Constipação\n\nSintomas de intoxicação:\n- Confusão\n- Alucinações\n- Agitação\n- Depressão respiratória\n\nArmazenamento:\n- Temperatura ambiente\n- Longe da luz e umidade"
                    );

                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Codeina} alt="" className="img-assets" />
                <h3>Codeína</h3>
                <p>fosfato de codeína</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Codeína",
                      "Para que serve:\n- Tratamento de tosse seca intensa e dores leves a moderadas\n\nContraindicações:\n- Alergia a opioides\n- Depressão respiratória\n- Crianças menores de 12 anos\n\nEfeitos colaterais:\n- Sonolência\n- Prisão de ventre\n- Náuseas\n- Potencial para dependência\n\nSintomas de intoxicação:\n- Depressão respiratória\n- Bradicardia\n- Coma\n\nArmazenamento:\n- Local seco e fresco\n- Fora do alcance de crianças"
                    );

                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Levodropropizina} alt="private" className="img-assets" />
                <h3>Levodro <br />propizina</h3>
                <p>Percof</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Levodropropizina",
                      "Para que serve:\n- Tosse seca ou irritativa, especialmente em doenças respiratórias leves\n\nContraindicações:\n- Crianças menores de 2 anos\n- Hipersensibilidade\n\nEfeitos colaterais:\n- Tontura\n- Sonolência\n- Distúrbios gástricos\n\nSintomas de intoxicação:\n- Fraqueza\n- Sonolência excessiva\n- Náuseas\n\nArmazenamento:\n- Temperatura ambiente\n- Proteger da luz direta"
                    );

                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Dropropizina} alt="" className="img-assets" />
                <h3>Dropropizina</h3>
                <p>Notuss</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Dropropizina",
                      "Para que serve:\n- Tosse seca de origem alérgica ou inflamatória\n\nContraindicações:\n- Hipersensibilidade\n- Insuficiência hepática grave\n\nEfeitos colaterais:\n- Tontura\n- Desconforto gástrico\n- Sonolência\n\nSintomas de intoxicação:\n- Náuseas\n- Vômitos\n- Depressão do sistema nervoso central\n\nArmazenamento:\n- Local seco e arejado\n- Frasco bem fechado"
                    );

                  }}>Sobre</a>
                </div>
              </div>
              <div className="card">
                <img src={Clobutinol} alt="" className="img-assets" />
                <h3>Clobutinol</h3>
                <p>Hytós Plus</p>
                <div className="link">
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); handleOpenModal("Clobutinol",
                      "Para que serve:\n- Tosse seca irritativa, especialmente noturna\n\nContraindicações:\n- Crianças pequenas\n- Arritmias cardíacas\n- Hipersensibilidade\n\nEfeitos colaterais:\n- Tontura\n- Boca seca\n- Insônia\n\nSintomas de intoxicação:\n- Convulsões\n- Arritmias\n- Agitação\n\nArmazenamento:\n- Local fresco, seco e protegido da luz"
                    );

                  }}>Sobre</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      {searchTerm && (
        <section>
          <h1>Resultados da busca</h1>
          {filtrados.length > 0 ? (
            <div className="card-container">
              <div className="card-content">
                {filtrados.map(m => (
                  <div className="card" key={m.nome}>
                    <img src={m.imagem} alt={m.nome} className="img-assets" />
                    <h3>{m.nome}</h3>
                    <p>{m.descricao}</p>
                    <div className="link">
                      <a href="#" onClick={(e) => {
                        e.preventDefault(); handleOpenModal(m.nome, m.descricao);
                      }}>Sobre</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>Nenhum resultado encontrado.</p>
          )}
        </section>
      )}


      <Modal
        show={showModal}
        onClose={handleCloseModal}
        title={modalData.title}
        description={modalData.description}
      />
    </>
  );
};

export default Card;
