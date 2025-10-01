"use client";
import { FaQuestionCircle, FaFlask, FaHeartbeat } from "react-icons/fa";

export default function InformativoPage() {
  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Informativo sobre Vacinas</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {/* O que é vacina */}
        <div className="card" style={{ flex: "1 1 300px", padding: "30px 20px", textAlign: "center" }}>
          <FaQuestionCircle size={50} color="#1976d2" style={{ marginBottom: "12px" }} />
          <h3 style={{ marginBottom: "10px" }}>O que é vacina?</h3>
          <p>
            A vacina é uma preparação biológica que estimula o sistema imunológico a produzir defesa contra 
            determinados agentes causadores de doenças, ajudando a prevenir infecções de forma segura e eficaz.
          </p>
        </div>

        {/* Composição */}
        <div className="card" style={{ flex: "1 1 300px", padding: "30px 20px", textAlign: "center" }}>
          <FaFlask size={50} color="#2e7d32" style={{ marginBottom: "12px" }} />
          <h3 style={{ marginBottom: "10px" }}>Do que é composta?</h3>
          <p>
            As vacinas podem conter partes enfraquecidas ou inativas de um microrganismo, proteínas ou material 
            genético, além de substâncias que ajudam a aumentar a resposta do corpo, garantindo maior proteção.
          </p>
        </div>

        {/* Importância */}
        <div className="card" style={{ flex: "1 1 300px", padding: "30px 20px", textAlign: "center" }}>
          <FaHeartbeat size={50} color="#d32f2f" style={{ marginBottom: "12px" }} />
          <h3 style={{ marginBottom: "10px" }}>Por que são importantes?</h3>
          <p>
            As vacinas salvam milhões de vidas todos os anos, prevenindo doenças graves, reduzindo surtos e 
            protegendo até mesmo aqueles que não podem ser vacinados por meio da imunidade coletiva.
          </p>
        </div>
      </div>
    </div>
  );
}
