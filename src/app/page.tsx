import React, { Suspense } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Script from "next/script";
import NewsSection from "./components/NewsSection";
import MarketPrices from "./components/MarketPrices";
import Weather from "./components/Weather";
import DolarCotizacion from "./components/DolarCotizacion";
import Carrusel from "./components/Carrusel";
import Menu from "./components/Menu";
import NoticiasNacionales from "./components/NoticiasNacionales";
import LoginActions from "./components/LoginActions"; 


export const revalidate = 600;

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-sm">
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-3K5L6Z0FX2"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3K5L6Z0FX2');
          `,
        }}
      />

      <header className="bg-[#321818] text-[#ffffff] py-3 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 space-y-3 md:space-y-0">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo AgroSoft"
              className="w-52 md:w-72 object-contain"
            />
          </div>

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

              <LoginActions />
            </form>
          </div>
        </div>
      </header>

      <nav className="bg-[#643d3d] text-white py-2 shadow-md">
        <Menu />
      </nav>

      <div className="container mx-auto px-4 mt-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Carrusel tipo="A" />
        <Carrusel tipo="B" />
      </div>

      <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
        <section className="md:w-1/4 space-y-4">
          <Suspense fallback={<p className="text-gray-600">Cargando mercados...</p>}>
            <MarketPrices />
          </Suspense>

          <Suspense fallback={<p className="text-gray-600">Cargando clima...</p>}>
            <Weather />
          </Suspense>

          <Suspense fallback={<p className="text-gray-600">Cargando cotización del dólar...</p>}>
            <DolarCotizacion />
          </Suspense>
        </section>

        <section className="md:w-3/4 bg-white p-6 rounded-lg shadow-md">
          <Suspense fallback={<p className="text-gray-600">Cargando noticias...</p>}>
            <NewsSection />
          </Suspense>

          <Suspense fallback={<p className="text-gray-600">Cargando noticias nacionales...</p>}>
            <NoticiasNacionales />
          </Suspense>
        </section>
      </main>

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

export default Page;