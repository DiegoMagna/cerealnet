import React, { useEffect, useState } from "react";

const DolarCotizacion = () => {
  const [dolar, setDolar] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDolar = async () => {
      try {
        const res = await fetch("/api/dolar-blue");
        const data = await res.json();
        setDolar(data?.blue);
      } catch (err) {
        console.error("Error al obtener la cotización del dólar:", err);
        setError("No se pudo cargar la cotización.");
      }
    };

    fetchDolar();
  }, []);

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-bold text-gray-800 mb-2">💵 Dólar Blue</h3>
      <p className="text-xl text-green-600">{dolar ? `$${dolar}` : "Cargando..."}</p>
    </div>
  );
};

export default DolarCotizacion;
