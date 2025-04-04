"use client";

import React from "react";
import { FaInstagram, FaFacebook, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Menu from "../components/Menu"; // 🔹 Importamos el menú
import { useRouter } from "next/navigation"; // ✅ Importa useRouter

const Contacto = () => {
    const router = useRouter(); // ✅ Define el router aquí
  return (
    <div className="min-h-screen bg-gray-100 text-sm">
      {/* 🔹 Encabezado optimizado */}
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

      {/* 🔹 Contenido de Contacto */}
      <main className="container mx-auto px-4 py-8">
        {/* 🔹 Datos de contacto alineados a la izquierda */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg">
          <div className="flex items-center space-x-3 text-sm text-gray-700">
            <FaPhone className="text-green-600" />
            <p className="font-semibold">5270098/99</p>
          </div>

          <div className="flex items-center space-x-3 text-sm text-gray-700 mt-3">
            <FaMapMarkerAlt className="text-red-600" />
            <p className="font-semibold">Santa Fe 1027, Rosario, Santa Fe 2000</p>
          </div>

          <div className="flex items-center space-x-3 text-sm text-gray-700 mt-3">
            <FaEnvelope className="text-blue-600" />
            <p className="font-semibold">soporte@cerealnet.com</p>
          </div>
        </div>

        {/* 🔹 Mapa */}
        <div className="mt-6">
          <iframe
            title="Ubicación de la Empresa"
            width="100%"
            height="400"
            className="rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.944981793542!2d-60.63931632462299!3d-32.94637957363673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab1c8d1e08cd%3A0x8fbb4f067676f8df!2sSanta%20Fe%201027%2C%20S2000AXM%20Rosario%2C%20Santa%20Fe%2C%20Argentina!5e0!3m2!1ses-419!2sar!4v1706897511583!5m2!1ses-419!2sar"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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

export default Contacto;
