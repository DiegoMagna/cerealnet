"use client";
import React, { useState, useEffect } from "react";

type CarruselProps = {
  tipo: string;
};

const Carrusel = ({ tipo }: CarruselProps) => {
  const [publicidades, setPublicidades] = useState<any[]>([]);
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    const fetchPublicidades = async () => {
      try {
        const res = await fetch(`/api/publicidades?tipo=${tipo}`);
        const data = await res.json();
        setPublicidades(data);
      } catch (error) {
        console.error("Error cargando publicidades:", error);
      }
    };

    fetchPublicidades();
  }, [tipo]);

  useEffect(() => {
    if (publicidades.length > 1) {
      const intervalo = setInterval(() => {
        setIndiceActual((prev) => (prev + 1) % publicidades.length);
      }, 5000);
      return () => clearInterval(intervalo);
    }
  }, [publicidades]);

  const abrirLink = (url: string) => {
    if (url && (url.startsWith("http://") || url.startsWith("https://"))) {
      window.open(url, "_blank");
    } else {
      console.warn("⚠️ URL no válida:", url);
    }
  };

  return (
    <div className="relative w-full max-w-[700px] h-[160px] md:h-[200px] lg:h-[220px] bg-white shadow-md rounded-lg flex items-center justify-center overflow-hidden">
      {publicidades.length === 0 ? (
        <p className="text-center text-gray-500">Cargando publicidades...</p>
      ) : (
        publicidades.map((pub, index) => (
          <div
            key={index}
            onClick={() => abrirLink(pub.url)}
            className={`absolute w-full h-full flex items-center justify-center transition-opacity duration-500 ${
              index === indiceActual ? "opacity-100 cursor-pointer" : "opacity-0 pointer-events-none"
            }`}
          >
            {pub.imagen.endsWith(".mp4") ? (
              <video
                src={pub.imagen}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
                disablePictureInPicture
                controls={false}
              />
            ) : (
              <img
                src={pub.imagen}
                alt="Publicidad"
                className="w-full h-full object-contain"
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Carrusel;
