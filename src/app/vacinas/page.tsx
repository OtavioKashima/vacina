"use client";
import { useState } from "react";
import { FaSyringe } from "react-icons/fa";

type Vacina = {
  nome: string;
  idade: string;
  descricao: string;
  campanhaMes: number;
};

const vacinas: Vacina[] = [
  { nome: "Influenza", idade: "Todas as idades", descricao: "Protege contra a gripe sazonal.", campanhaMes: 5 },
  { nome: "Covid-19", idade: "12 anos ou mais", descricao: "Vacina de reforço contra Covid-19.", campanhaMes: 9 },
  { nome: "Hepatite B", idade: "0-49 anos", descricao: "Previne a Hepatite B.", campanhaMes: 3 },
  { nome: "HPV", idade: "9-26 anos", descricao: "Previne câncer e verrugas genitais.", campanhaMes: 11 },
];

const instituicoes = [
  "Posto Central - Rua da Saúde, 123",
  "UBS Jardim das Flores",
  "Clínica da Família Nova Vida",
  "Centro de Vacinação Municipal",
];

export default function VacinasPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [vacinaSelecionada, setVacinaSelecionada] = useState<Vacina | null>(null);
  const [data, setData] = useState("");
  const [instituicao, setInstituicao] = useState("");

  const abrirModal = (vacina: Vacina) => {
    setVacinaSelecionada(vacina);
    setModalOpen(true);
  };

  const fecharModal = () => {
    setVacinaSelecionada(null);
    setData("");
    setInstituicao("");
    setModalOpen(false);
  };

  const confirmarAgendamento = () => {
    if (!data || !instituicao || !vacinaSelecionada) {
      alert("Por favor, selecione a data, instituição e vacina.");
      return;
    }
    // Melhor substituir alert por console.log ou UI de feedback no futuro
    console.log("Agendamento realizado:", {
      vacina: vacinaSelecionada.nome,
      data,
      instituicao,
    });
    fecharModal();
  };

  const anoAtual = new Date().getFullYear();

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Vacinas Disponíveis</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {vacinas.map((v, i) => (
          <div
            key={i}
            className="card"
            style={{ flex: "1 1 250px", textAlign: "center", padding: "30px 20px" }}
          >
            <FaSyringe size={50} color="#1976d2" style={{ marginBottom: "12px" }} />
            <h3 style={{ marginBottom: "6px" }}>{v.nome}</h3>
            <p style={{ fontWeight: "bold", color: "#1565c0", marginBottom: "8px" }}>
              {v.idade}
            </p>
            <p>{v.descricao}</p>
            <button className="button" style={{ marginTop: "12px" }} onClick={() => abrirModal(v)}>
              Agendar
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && vacinaSelecionada && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Agendar {vacinaSelecionada.nome}</h3>

            <label>📅 Escolha a data:</label>
            <input
              type="date"
              value={data}
              min={`${anoAtual}-${String(vacinaSelecionada.campanhaMes).padStart(2, "0")}-01`}
              max={`${anoAtual}-${String(vacinaSelecionada.campanhaMes).padStart(2, "0")}-${new Date(
                anoAtual,
                vacinaSelecionada.campanhaMes,
                0
              ).getDate()}`}
              onChange={(e) => setData(e.target.value)}
              style={{ margin: "10px 0", padding: "8px", width: "100%" }}
            />

            <label>🏥 Escolha a instituição:</label>
            <select
              value={instituicao}
              onChange={(e) => setInstituicao(e.target.value)}
              style={{ margin: "10px 0", padding: "8px", width: "100%" }}
            >
              <option value="">Selecione</option>
              {instituicoes.map((inst, idx) => (
                <option key={idx} value={inst}>
                  {inst}
                </option>
              ))}
            </select>

            <div style={{ marginTop: "15px", display: "flex", gap: "10px", justifyContent: "center" }}>
              <button className="button" onClick={confirmarAgendamento}>
                Confirmar
              </button>
              <button className="button" style={{ backgroundColor: "#b71c1c" }} onClick={fecharModal}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
