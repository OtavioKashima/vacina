"use client";
import { FaSyringe, FaCalendarCheck, FaHeartbeat } from "react-icons/fa";

export default function HomePage() {
  return (
    <div>
      {/* Banner */}
      <div className="card" style={{ background: "linear-gradient(90deg, #1976d2, #1565c0)", color: "white", textAlign: "center" }}>
        <h2>Bem-vindo à Campanha de Vacinação</h2>
        <p>Proteja sua saúde! Confira vacinas disponíveis e locais de atendimento.</p>
      </div>

      {/* Cards de destaque */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div className="card" style={{ flex: "1 1 300px", textAlign: "center" }}>
          <FaSyringe size={40} color="#1976d2" style={{ marginBottom: "12px" }} />
          <h3>Vacinas Disponíveis</h3>
          <p>Confira a lista de vacinas aplicadas no posto de saúde da sua região.</p>
        </div>
        <div className="card" style={{ flex: "1 1 300px", textAlign: "center" }}>
          <FaCalendarCheck size={40} color="#1976d2" style={{ marginBottom: "12px" }} />
          <h3>Calendário de Vacinação</h3>
          <p>Fique atento às datas de campanhas e mutirões em sua cidade.</p>
        </div>
        <div className="card" style={{ flex: "1 1 300px", textAlign: "center" }}>
          <FaHeartbeat size={40} color="#1976d2" style={{ marginBottom: "12px" }} />
          <h3>Dicas de Saúde</h3>
          <p>Informações confiáveis para manter você e sua família protegidos.</p>
        </div>
      </div>
    </div>
  );
}
