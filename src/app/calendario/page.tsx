"use client";
import { FaCalendarAlt } from "react-icons/fa";

const calendarios = [
  { mes: "Janeiro 2025", descricao: "Campanha de Influenza e Hepatite B." },
  { mes: "Fevereiro 2025", descricao: "Mutirão de atualização de vacinas para crianças." },
  { mes: "Março 2025", descricao: "Vacinação de adolescentes e adultos contra HPV e Influenza." },
  { mes: "Abril 2025", descricao: "Campanha de reforço contra Covid-19." },
];

export default function CalendarioPage() {
  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Calendário de Vacinação</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {calendarios.map((c, i) => (
          <div key={i} className="card" style={{ flex: "1 1 280px", textAlign: "center", padding: "30px 20px" }}>
            <FaCalendarAlt size={50} color="#1976d2" style={{ marginBottom: "12px" }} />
            <h3 style={{ marginBottom: "6px" }}>{c.mes}</h3>
            <p>{c.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
