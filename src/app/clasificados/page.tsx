"use client";

import React from "react";
import Menu from "../components/Menu";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation"; // ✅ Importa useRouter

const Clasificados = () => {
  const router = useRouter(); // ✅ Usá el hook dentro del componente

  return (
    <div className="min-h-screen bg-gray-100 text-sm">
      {/* 🔹 Encabezado con fondo negro */}
      <header className="bg-[#321818] text-[#ffffff] py-3 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 space-y-3 md:space-y-0">
          {/* 🔹 Logo a la izquierda */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo AgroSoft"
              className="w-36 md:w-48 object-contain"
            />
          </div>

          {/* 🔹 Login a la derecha */}
          <div className="flex items-center w-full md:w-auto justify-end">
            <form
              action="http://estadisticas.cerealnet.com/LoginU"
              method="post"
              className="bg-white p-2 rounded-md shadow-md flex flex-col w-full md:w-44"
            >
              <h2 className="text-center text-xs font-semibold text-[#3d3623] mb-1">
                Ingresar
              </h2>
              <label className="text-gray-700 text-xs">Usuario</label>
              <input
                type="text"
                name="IdUsuario"
                placeholder="Usuario"
                className="border border-gray-300 rounded-md px-2 py-1 text-xs mb-1"
                required
              />
              <label className="text-gray-700 text-xs">Contraseña</label>
              <input
                type="password"
                name="clave"
                placeholder="Clave"
                className="border border-gray-300 rounded-md px-2 py-1 text-xs mb-2"
                required
              />
              <div className="flex justify-between space-x-1">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-2 py-1 text-xs rounded-md hover:bg-green-700 transition"
                >
                  Ingresar
                </button>
                <button
                  type="button"
                  className="bg-gray-400 text-white px-2 py-1 text-xs rounded-md hover:bg-gray-500 transition"
                  onClick={() => router.push("/alta-usuario")}
                >
                  Crear Cuenta
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>

      {/* 🔹 Menú de navegación */}
      <Menu />

      {/* 🔹 Contenido de Clasificados */}
      <main className="container mx-auto px-4 py-8">
        {/* ... (contenido sin cambios) ... */}
      </main>

      {/* 🔹 Pie de Página */}
      <footer className="bg-gray-800 text-white py-4 text-center text-xs mt-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 space-y-2 md:space-y-0 md:space-x-3">
          <p>© 2025 Portal del Agro - CerealNet -</p>
          <div className="flex space-x-3">
            <a
              href="https://www.instagram.com/agrosoft_srl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white text-xl hover:text-gray-300 transition" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100071191850933"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-white text-xl hover:text-gray-300 transition" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Clasificados;
