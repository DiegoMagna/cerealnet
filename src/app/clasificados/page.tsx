"use client";

import React from "react";
import Menu from "../components/Menu"; // ✅ Menú
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Clasificados = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-sm">
      {/* 🔹 Encabezado con fondo negro */}
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
                    action="https://intra.cerealnet.com/LoginU"
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
                      
                    </div>
                  </form>
                </div>
              </div>
            </header>

      {/* 🔹 Menú de navegación */}
      <Menu />

      {/* 🔹 Contenido de Clasificados */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#3d3623] mb-6">📍 Clasificados en CerealNet - SECCIÓN EN DESARROLLO</h1>
        <p className="text-gray-700 leading-relaxed">
          En CerealNet, brindamos un espacio exclusivo para la compra y venta de productos y servicios del sector agropecuario. A través de nuestra sección de Clasificados, podrás publicar y encontrar oportunidades comerciales en tiempo real.
        </p>

        <h2 className="text-xl font-semibold text-[#3d3623] mt-6">🛒 ¿Qué puedes encontrar en Clasificados?</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li><strong>✅ Cereales y Oleaginosas:</strong> Compra y venta de granos en distintas condiciones y ubicaciones.</li>
          <li><strong>✅ Insumos Agropecuarios:</strong> Fertilizantes, semillas, agroquímicos y más.</li>
          <li><strong>✅ Maquinaria y Equipos:</strong> Tractores, cosechadoras, tolvas, silos y herramientas.</li>
          <li><strong>✅ Transporte y Logística:</strong> Servicios de fletes y soluciones para el traslado de mercadería.</li>
          <li><strong>✅ Campos y Establecimientos:</strong> Alquiler y venta de tierras agrícolas y ganaderas.</li>
          <li><strong>✅ Otros Servicios:</strong> Todo lo relacionado con la cadena agropecuaria.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#3d3623] mt-6">📌 ¿Cómo publicar un aviso?</h2>
        <p className="text-gray-700 mt-2">
          Para publicar un aviso en la sección de Clasificados, sigue estos pasos:
        </p>
        <ol className="list-decimal list-inside mt-2 text-gray-700">
          <li><strong>1️⃣ Registrate</strong> en el portal CerealNet (o iniciá sesión si ya tenés cuenta).</li>
          <li><strong>2️⃣ Seleccioná la categoría</strong> en la que deseas publicar tu anuncio.</li>
          <li><strong>3️⃣ Cargá los detalles:</strong> Descripción del producto/servicio, precio, ubicación y fotos.</li>
          <li><strong>4️⃣ Publicá tu aviso</strong> y llegá a miles de potenciales compradores o vendedores.</li>
        </ol>

        <p className="text-green-700 font-semibold mt-4">🚀 ¡Es fácil, rápido y sin intermediarios!</p>

        <h2 className="text-xl font-semibold text-[#3d3623] mt-6">📞 Contacto y Consultas</h2>
        <p className="text-gray-700">
          Si necesitas ayuda para publicar o responder un aviso, podés contactarnos a:
        </p>
        <p className="text-gray-700 mt-2"><strong>📧 Email:</strong> <a href="mailto:soporte@cerealnet.com" className="text-blue-600 hover:underline">soporte@cerealnet.com</a></p>
        <p className="text-gray-700"><strong>📞 Teléfono:</strong> <a href="tel:5270098/99" className="text-blue-600 hover:underline">5270098/99</a></p>
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

export default Clasificados;
