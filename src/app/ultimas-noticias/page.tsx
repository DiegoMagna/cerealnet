"use client"; // Asegura que el componente sea interactivo

import React, { Suspense } from "react";
import { useRouter } from "next/navigation"; // ✅ Importa useRouter
import Menu from "../components/Menu";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import NoticiasNacionales from "../components/NoticiasNacionales";
import NoticiasAgro from "../components/NoticiasAgro";

const UltimasNoticias = () => {
  const router = useRouter(); // ✅ Define el router aquí

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 🔹 Encabezado con redes y login */}
     <header className="bg-[#321818] text-[#ffffff] py-3 shadow-md">
     <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 space-y-3 md:space-y-0">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo AgroSoft"
              className="w-52 md:w-72 object-contain" // 🔁 Agrandado un 20%
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
                className="border border-gray-300 rounded-md px-2 py-1 text-xs mb-2 text-black" 
                required
              />
              <label className="text-gray-700 text-xs">Contraseña</label>
              <input
                type="password"
                name="clave"
                placeholder="Clave"
                className="border border-gray-300 rounded-md px-2 py-1 text-xs mb-2 text-black" 
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

      {/* 🔹 Contenido Principal */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#3d3623] mb-6">📰 Últimas Noticias</h1>

        {/* 🔹 Sección de Noticias del Agro */}
        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">🌱 Noticias del Agro</h2>
          <Suspense fallback={<p className="text-gray-600">Cargando noticias del agro...</p>}>
            <NoticiasAgro />
          </Suspense>
        </section>

        {/* 🔹 Sección de Noticias Generales */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">🌍 Panorama Informativo</h2>
          <Suspense fallback={<p className="text-gray-600">Cargando noticias nacionales...</p>}>
            <NoticiasNacionales />
          </Suspense>
        </section>
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

export default UltimasNoticias;
