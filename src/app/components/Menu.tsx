"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Iconos para el menú móvil

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#643d3d] text-white py-2 shadow-md text-sm md:text-bas">
      <div className="container mx-auto flex justify-between items-center px-4">

        {/* 🔹 Botón del menú hamburguesa (solo en móvil) */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />} {/* Alterna entre abrir/cerrar */}
        </button>

        {/* 🔹 Menú en pantallas grandes */}
        <div className="hidden md:flex justify-center space-x-6 w-full">
          <Link href="/" className="hover:underline">Página Principal</Link>
          <Link href="/nuestros-servicios" className="hover:underline">Nuestros Servicios</Link>
          <Link href="/que-es-cerealnet" className="hover:underline">¿Qué es CerealNet?</Link>
          <Link href="/ultimas-noticias" className="hover:underline">Últimas Noticias</Link>
          <Link href="/camiones-descarga" className="hover:underline">Camiones a la Descarga</Link>
          <Link href="/mapa-puerto" className="hover:underline">Mapa de Puertos y Acondicionadoras</Link>
          <Link href="/contacto" className="hover:underline">Contacto</Link>
          <Link href="/clasificados" className="hover:underline text-red-500 font-bold">Clasificados</Link>
        </div>

      </div>

      {/* 🔹 Menú desplegable en móviles */}
      {menuOpen && (
        <div className="md:hidden bg-[#643d3d] text-white flex flex-col space-y-2 p-4">
          <Link href="/" className="hover:underline" onClick={() => setMenuOpen(false)}>Página Principal</Link>
          <Link href="/nuestros-servicios" className="hover:underline" onClick={() => setMenuOpen(false)}>Nuestros Servicios</Link>
          <Link href="/que-es-cerealnet" className="hover:underline" onClick={() => setMenuOpen(false)}>¿Qué es CerealNet?</Link>
          <Link href="/ultimas-noticias" className="hover:underline" onClick={() => setMenuOpen(false)}>Últimas Noticias</Link>
          <Link href="/camiones-descarga" className="hover:underline" onClick={() => setMenuOpen(false)}>Camiones a la Descarga</Link>
          <Link href="/mapa-puerto" className="hover:underline" onClick={() => setMenuOpen(false)}>Mapa de Puertos y Acondicionadoras</Link>
          <Link href="/contacto" className="hover:underline" onClick={() => setMenuOpen(false)}>Contacto</Link>
          <Link href="/clasificados" className="hover:underline text-red-500 font-bold" onClick={() => setMenuOpen(false)}>Clasificados</Link>
        </div>
      )}
    </nav>
  );
};

export default Menu;
