"use client";
import { notFound } from "next/navigation";
import { noticias } from "../../data/noticias";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface Props {
  params: { id: string };
}

export default function NoticiaPage({ params }: Props) {
  const noticia = noticias.find((n) => n.id === Number(params.id));
  if (!noticia) return notFound();

  return (
    <div className="card">
      <Link href="/noticias" className="button" style={{ display: "inline-flex", alignItems: "center", marginBottom: "16px" }}>
        <FaArrowLeft style={{ marginRight: "8px" }} /> Voltar para Notícias
      </Link>
      <img src={noticia.imagem} alt={noticia.titulo} />
      <h2>{noticia.titulo}</h2>
      <p>{noticia.conteudo}</p>
    </div>
  );
}
