"use client";

import React, { useEffect, useState } from "react";

const NoticiasAgro = () => {
  const [noticias, setNoticias] = useState<any[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch("/api/rss"); // ✅ Ajustar si hay una API específica para noticias del agro
        if (!response.ok) throw new Error("No se encontraron noticias.");
        const data = await response.json();

        if (data.length === 0) throw new Error("No se encontraron noticias.");

        setNoticias(data.slice(0, 10)); // ✅ Solo las últimas 10 noticias
      } catch (error) {
        console.error("Error obteniendo las noticias del agro:", error);
        setError("No se pudieron obtener las noticias en este momento.");
      }
    };

    fetchNoticias();
  }, []);

  return (
    <div>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : noticias.length === 0 ? (
        <p className="text-gray-600">Cargando noticias...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {noticias.map((noticia, index) => (
            <a key={index} href={noticia.link} target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg shadow-md transition hover:shadow-lg">
              <img
                src={noticia.image ? noticia.image : "/no-image.jpg"}
                alt={noticia.title}
                className="w-full h-40 object-cover rounded-md mb-3"
                onError={(e) => (e.currentTarget.src = "/no-image.jpg")}
              />
              <h3 className="text-lg font-semibold text-[#3d3623] hover:text-green-600 transition-colors">{noticia.title}</h3>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NoticiasAgro;
