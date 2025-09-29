"use client";
import { useState } from "react";
import "./globals.css";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <html lang="pt-BR">
      <body>
        <Topbar onMenuClick={toggleSidebar} />
        <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
        <main className={`main-content ${sidebarOpen ? "shift" : ""}`}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
