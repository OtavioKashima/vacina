"use client";
import Link from "next/link";
import { noticias } from "../data/noticias";
import { FaNewspaper } from "react-icons/fa";

export default function NoticiasPage() {
  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Últimas Notícias</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {noticias.map((n) => (
          <div key={n.id} className="card" style={{ flex: "1 1 300px" }}>
            <img src={n.imagem} alt={n.titulo} />
            <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
              <FaNewspaper color="#1976d2" size={20} style={{ marginRight: "8px" }} />
              <h3>{n.titulo}</h3>
            </div>
            <p>{n.descricao}</p>
            <Link href={`/noticias/${n.id}`} className="button">Leia mais</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
