"use client";
import Link from "next/link";
import { FaSyringe, FaCalendarCheck, FaInfoCircle } from "react-icons/fa";

export default function HomePage() {
  return (
    <div>
      {/* Banner */}
      <div className="card" style={{ background: "linear-gradient(90deg, #1976d2, #1565c0)", color: "white", textAlign: "center" }}>
        <h2>Bem-vindo à Campanha de Vacinação</h2>
        <p>Proteja sua saúde! Confira vacinas disponíveis e locais de atendimento.</p>
      </div>

      {/* Cards de destaque */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {/* Card Vacinas */}
        <Link href="/vacinas" className="card" style={{ flex: "1 1 280px", maxWidth: "300px", textAlign: "center", cursor: "pointer" }}>
          <FaSyringe size={60} color="#1976d2" style={{ marginBottom: "12px" }} />
          <h3>Vacinas</h3>
          <p>Veja as vacinas disponíveis e saiba mais sobre cada uma.</p>
        </Link>

        {/* Card Calendário */}
        <Link href="/calendario" className="card" style={{ flex: "1 1 280px", maxWidth: "300px", textAlign: "center", cursor: "pointer" }}>
          <FaCalendarCheck size={60} color="#2e7d32" style={{ marginBottom: "12px" }} />
          <h3>Calendário</h3>
          <p>Confira as datas e campanhas de vacinação do ano.</p>
        </Link>

        {/* Card Informativo */}
        <Link href="/informativo" className="card" style={{ flex: "1 1 280px", maxWidth: "300px", textAlign: "center", cursor: "pointer" }}>
          <FaInfoCircle size={60} color="#d32f2f" style={{ marginBottom: "12px" }} />
          <h3>Informativo</h3>
          <p>Entenda o que são as vacinas, sua composição e importância.</p>
        </Link>
      </div>
    </div>
  );
}
