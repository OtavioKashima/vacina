"use client";
import Link from "next/link";
import { FaHome, FaCalendarCheck, FaSyringe, FaNewspaper } from "react-icons/fa";

export default function Sidebar({ open, onClose }: { open: boolean, onClose: () => void }) {
  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <Link href="/" onClick={onClose}><span className="icon"><FaHome /></span>Início</Link>
      <Link href="/calendario" onClick={onClose}><span className="icon"><FaCalendarCheck /></span>Calendário</Link>
      <Link href="/vacinas" onClick={onClose}><span className="icon"><FaSyringe /></span>Vacinas</Link>
      <Link href="/noticias" onClick={onClose}><span className="icon"><FaNewspaper /></span>Notícias</Link>
    </div>
  );
}
