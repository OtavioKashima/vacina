"use client";

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <div className="topbar">
      <button className="menu-btn" onClick={onMenuClick}>☰</button>
      <div className="logo">Vacina Já</div>
    </div>
  );
}
