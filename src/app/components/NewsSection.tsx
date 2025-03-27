"use client";

import React, { useEffect, useState } from "react";

const NewsSection = () => {
  const [noticias, setNoticias] = useState<any[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/rss");
        if (!res.ok) throw new Error("No se encontraron noticias.");
        const newsData = await res.json();
        if (newsData.length === 0) {
          throw new Error("No se encontraron noticias.");
        }
        setNoticias(newsData);
      } catch (err) {
        console.error("Error al obtener noticias:", err);
        setError("No se pudieron obtener las noticias en este momento.");
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold text-[#8B4513]">📰 Actualidad Agropecuaria</h2>

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : noticias.length === 0 ? (
        <p className="text-gray-600">Cargando noticias...</p>
      ) : (
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {noticias.map((noticia, index) => (
            <a
              key={index}
              href={noticia.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-50 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={noticia.image ? noticia.image : "/no-image.jpg"}
                alt={noticia.title}
                className="w-full h-32 object-cover"
                onError={(e) => (e.currentTarget.src = "/no-image.jpg")}
              />
              <div className="p-3">
                <h3 className="text-md font-semibold text-gray-900">{noticia.title}</h3>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsSection;
