"use client";

import React, { useEffect, useState } from "react";

// ✅ Definimos el tipo de cada noticia
type Noticia = {
  link: string;
  image: string;
  title: string;
};

const NoticiasNacionales = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch("/api/rss-nacionales");
        const data = await response.json();
        setNoticias(data);
      } catch (error) {
        console.error("Error obteniendo noticias nacionales:", error);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-blue-700">📰 Panorama Informativo</h2>

      {noticias.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {noticias.map((noticia, index) => (
            <a
              key={index}
              href={noticia.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-lg shadow-md transition hover:shadow-lg"
            >
              <img
                src={noticia.image}
                alt={noticia.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-md font-semibold text-gray-900 hover:text-blue-700 transition-colors">
                {noticia.title}
              </h3>
            </a>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Cargando noticias...</p>
      )}
    </div>
  );
};

export default NoticiasNacionales;
