"use client";

import React from "react";
import { useRouter } from "next/navigation"; // ✅ Importa useRouter
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Menu from "../components/Menu"; // 🔹 Importamos el menú

const QueEsCerealNet = () => {
    const router = useRouter(); // ✅ Define el router aquí
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

      {/* 🔹 Contenido principal */}
      <main className="container mx-auto py-10 px-6 max-w-4xl text-left text-gray-800 leading-relaxed">
        <h2 className="text-2xl font-semibold text-[#3d3623] mb-4">¿Qué es CEREALNET?</h2>
        <p>
          <strong>Agrosoft SRL</strong>, empresa dedicada a dar soluciones y servicios basados en el uso de tecnología informática,
          junto con un grupo de <strong>«Clientes-Asociados»</strong> formado por las principales empresas dedicadas a los servicios de control de peso y calidad en la carga y descarga de cereales y oleaginosos (Entregadores), han desarrollado, hace más de 15 años, el sitio web:
          <a href="http://www.CerealNet.com" className="text-blue-600 hover:underline"> www.CerealNet.com</a>,
          el cual concentra toda la información inherente a la entrega de cereales y oleaginosos, los movimientos de camiones y vagones con mercadería arribada y descargada en puertos y fábricas de todo el país.
        </p>

        <p className="mt-4">
          <a href="http://www.CerealNet.com" className="text-blue-600 hover:underline">WWW.CerealNet.com</a> ha evolucionado a lo largo de los años,
          incorporando nuevas tecnologías y funcionalidades que lo han convertido en una <strong>Plataforma de Información "On-Line"</strong>,
          disponible las <strong>24 horas, los 365 días del año</strong>. Esta plataforma permite a nuestros <strong>Clientes-Asociados</strong>
          brindar acceso a sus propios clientes, como corredores, productores, acopiadores, cooperativas, transportistas y operadores de plan canje.
        </p>

        <p className="mt-4">
          Los usuarios pueden navegar, buscar información, recibir correos, descargar archivos e imágenes de documentación, gestionar el estado de sus camiones demorados por problemas de calidad o documentación, autorizar la descarga de los mismos, efectuar consultas y solicitar la generación de interfaces para la aplicación a sistemas o el desarrollo de servicios web para proporcionar o consumir información específica.
        </p>

        <p className="mt-4">
          <strong>CerealNet</strong> ofrece acceso a <strong>datos históricos de descarga y reportes analíticos</strong>, además de permitir la gestión de datos en tiempo real a través de su plataforma web y herramientas móviles.
          Estas herramientas están diseñadas para que los clientes puedan <strong>tomar decisiones sobre sus camiones arribados a puerto</strong> y realizar un seguimiento en caso de demoras o rechazos por problemas de calidad o documentación.
        </p>

        <p className="mt-4">
          El acceso a nuestra red es habilitado exclusivamente a través de las empresas entregadoras que forman parte de nuestra red de <strong>Clientes-Asociados</strong>. Toda la información es estrictamente confidencial y solo puede ser consultada por usuarios autorizados, a través de un sistema de registro con <strong>claves y contraseñas seguras</strong>.
        </p>

        <p className="mt-4">
          Además, <a href="http://www.CerealNet.com" className="text-blue-600 hover:underline">CerealNet</a> provee aplicaciones de ERP para empresas dedicadas a los servicios de <strong>control de peso y calidad, embarques y puertos</strong>.
          Para más información, contactanos en <a href="mailto:contacto@cereal-net.com.ar" className="text-blue-600 hover:underline">contacto@cereal-net.com.ar</a>.
        </p>

        {/* 🔹 Video de Vimeo */}
        <div className="mt-8 flex justify-center">
          <iframe
            src="https://player.vimeo.com/video/271697947"
            width="720"
            height="405"
            allow="autoplay; fullscreen"
            className="rounded-lg shadow-lg w-full max-w-3xl"
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

export default QueEsCerealNet;
