"use client";

import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Menu from "../components/Menu"; // 🔹 Importamos el menú

const servicios = [
  { titulo: "CerealNet", descripcion: "Portal de gestión que centraliza la información de camiones descargados en puertos..." },
  { titulo: "Puertos Online", descripcion: "Sistema que brinda información en línea sobre el estado operativo de los puertos..." },
  { titulo: "Gestión de Entrega y Exportación de Cereales", descripcion: "Sistema integral para administrar la logística y documentación..." },
  { titulo: "Sistema de Recepción de Cereales", descripcion: "Herramienta que gestiona la descarga de camiones en puertos y plantas..." },
  { titulo: "Sistema de Facturación", descripcion: "Solución diseñada para la emisión y gestión de facturas dentro del sector agropecuario..." },
  { titulo: "Sistema de Gestión Contable", descripcion: "Plataforma que facilita la administración financiera de empresas del agro..." },
  { titulo: "Sistema de Embarques", descripcion: "Optimiza la planificación y seguimiento de embarques de cereales..." },
  { titulo: "Digitalización de Carta de Porte y Ticket", descripcion: "Transforma la gestión documental mediante la digitalización de cartas de porte y tickets..." },
  { titulo: "Sistema de Confección de Carta de Porte", descripcion: "Plataforma que agiliza la generación y administración de cartas de porte..." },
  { titulo: "Módulo de Alertas de WhatsApp Automático", descripcion: "Sistema adaptable para cualquier plataforma, que permite el envío de notificaciones automáticas..." },
  { titulo: "App de CerealNet", descripcion: "Aplicación móvil que permite acceder a la misma operativa del portal desde el celular..." },
  { titulo: "App de Puertos Online", descripcion: "Versión móvil del sistema de Puertos Online, que brinda información en tiempo real..." },
];

const NuestrosServicios = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* 🔹 Encabezado optimizado */}
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

      {/* 🔹 Sección de Introducción */}
      <section className="container mx-auto py-10 px-6 max-w-7xl">
        <p className="text-gray-800 text-lg leading-relaxed text-justify">
          <strong>AgroSoft S.R.L.</strong> es la creadora de <strong>CerealNet</strong> y una empresa líder en el desarrollo de soluciones tecnológicas para el sector agropecuario. Desde <strong>1999</strong>, un equipo de profesionales con amplia experiencia ha trabajado en la evolución del negocio, adaptándose exitosamente a los cambios del mercado y brindando herramientas innovadoras para la gestión del agro.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed text-justify mt-4">
          Entre sus desarrollos, destacamos las siguientes herramientas, que a lo largo del tiempo han brindado soluciones a los entregadores de cereal, así como nuevas innovaciones como la interacción con los servicios del Arca, el desarrollo de apps para celulares y los sistemas de alerta por WhatsApp.
        </p>
      </section>

      {/* 🔹 Contenido de servicios */}
      <main className="container mx-auto py-12 px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-6">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 transition transform hover:-translate-y-2 hover:shadow-lg border border-gray-200"
            >
              {/* 🔹 Título en amarillo oscuro */}
              <h3 className="text-xl font-semibold text-[#D4A017] hover:text-[#B8860B] transition-colors">
                {servicio.titulo}
              </h3>
              <p className="text-gray-600 mt-2">{servicio.descripcion}</p>
            </div>
          ))}
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

export default NuestrosServicios;
