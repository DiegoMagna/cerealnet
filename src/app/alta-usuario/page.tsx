"use client";

import React from "react";
import { useRouter } from "next/navigation"; // ✅ Para la navegación
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Menu from "../components/Menu"; // ✅ Menú

const AltaUsuario = () => {
  const router = useRouter(); // ✅ Definir el router para la redirección

  return (
    <div className="min-h-screen bg-gray-100 text-sm">
      {/* 🔹 Encabezado mejorado */}
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

      {/* 🔹 Contenido de la página */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-[#3d3623] text-center mb-4">
          Solicitud de Alta de Usuario
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md text-gray-800">
          <p className="mb-4">
            En CerealNet, ofrecemos dos tipos de usuarios que pueden registrarse en el portal:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>✅ <strong>Entregadores</strong></li>
            <li>✅ <strong>Intervinientes en Cartas de Porte</strong></li>
          </ul>

          <h2 className="text-lg font-semibold mb-2">📌 Alta de Entregadores</h2>
          <p className="mb-4">
            Si sos entregador y querés comenzar a <strong>publicar en CerealNet</strong>, comunicate con nuestro equipo al 
            <span className="text-green-600 font-semibold"> 5270098/99</span> para gestionar tu alta y recibir toda la información necesaria.
          </p>

          <h2 className="text-lg font-semibold mb-2">📌 Alta de Intervinientes en Cartas de Porte</h2>
          <p className="mb-4">
            Si sos un interviniente en una <strong>Carta de Porte</strong> (corredor, exportador, acopiador, etc.), debés solicitarle el alta al 
            <strong> entregador</strong> que gestiona tus operaciones en CerealNet. El entregador se encargará de habilitarte dentro del sistema.
          </p>

          <p>Para más información o asistencia, no dudes en contactarnos. 🚀</p>
        </div>
      </main>

      {/* 🔹 Pie de Página */}
     <footer className="bg-gray-800 text-white py-4 text-center text-xs mt-10">
             <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 space-y-2 md:space-y-0 md:space-x-3">

               {/* 🔹 Texto del footer */}
               <p>© 2025 Portal del Agro - CerealNet -</p>

               {/* 🔹 Redes sociales alineadas en la misma línea */}
               <div className="flex space-x-3">
                 <a href="https://www.instagram.com/agrosoft_srl/" target="_blank" rel="noopener noreferrer">
                   <FaInstagram className="text-white text-xl hover:text-gray-300 transition" />
                 </a>
                 <a href="https://www.facebook.com/profile.php?id=100071191850933" target="_blank" rel="noopener noreferrer">
                   <FaFacebook className="text-white text-xl hover:text-gray-300 transition" />
                 </a>
               </div>

             </div>
           </footer>
    </div>
  );
};

export default AltaUsuario;
