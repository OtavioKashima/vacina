"use client";
import { FaCalendarAlt } from "react-icons/fa";

const vacinas = [
  { nome: "Influenza", campanhaMes: 5 },
  { nome: "Covid-19", campanhaMes: 9 },
  { nome: "Hepatite B", campanhaMes: 3 },
  { nome: "HPV", campanhaMes: 11 },
];

// Nomes dos meses
const meses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

export default function CalendarioPage() {
  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Calendário de Vacinação</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        {vacinas.map((v, i) => (
          <div key={i} className="card" style={{ padding: "25px 20px", textAlign: "center" }}>
            <FaCalendarAlt size={45} color="#2e7d32" style={{ marginBottom: "12px" }} />
            <h3 style={{ marginBottom: "6px", color: "#1565c0" }}>{v.nome}</h3>
            <p style={{ fontWeight: "bold", color: "#2e7d32" }}>
              📅 {meses[v.campanhaMes - 1]}
            </p>
            <p style={{ marginTop: "10px" }}>
              A campanha da vacina <strong>{v.nome}</strong> ocorre no mês de <strong>{meses[v.campanhaMes - 1]}</strong>.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
