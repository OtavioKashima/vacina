"use client";
import { FaSyringe, FaUser } from "react-icons/fa";

const vacinas = [
  { nome: "Influenza", idade: "Todas as idades", descricao: "Protege contra a gripe sazonal." },
  { nome: "Covid-19", idade: "12 anos ou mais", descricao: "Vacina de reforço contra Covid-19." },
  { nome: "Hepatite B", idade: "0-49 anos", descricao: "Previne a Hepatite B." },
  { nome: "HPV", idade: "9-26 anos", descricao: "Previne câncer e verrugas genitais." },
];

export default function VacinasPage() {
  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Vacinas Disponíveis</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {vacinas.map((v, i) => (
          <div key={i} className="card" style={{ flex: "1 1 250px", textAlign: "center", padding: "30px 20px" }}>
            <FaSyringe size={50} color="#1976d2" style={{ marginBottom: "12px" }} />
            <h3 style={{ marginBottom: "6px" }}>{v.nome}</h3>
            <p style={{ fontWeight: "bold", color: "#1565c0", marginBottom: "8px" }}>{v.idade}</p>
            <p>{v.descricao}</p>
            <button className="button" style={{ marginTop: "12px" }}>Agendar</button>
          </div>
        ))}
      </div>
    </div>
  );
}
