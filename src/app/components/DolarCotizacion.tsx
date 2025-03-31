import React, { useEffect, useState } from "react";

const DolarCotizacion = () => {
  const [dolares, setDolares] = useState<{
    blue: string;
    oficial: string;
    mep: string;
    ccl: string;
  } | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDolar = async () => {
      try {
        const res = await fetch("/api/dolar-blue");
        const data = await res.json();

        const oficial = data?.oficial ?? "No disponible";
        const blue = data?.blue ?? "No disponible";
        const mep = data?.mep ?? "No disponible";
        const ccl = data?.ccl ?? "No disponible";

        setDolares({ oficial, blue, mep, ccl });
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
    <div className="bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-bold text-gray-800 mb-2">💵 Cotización del Dólar</h3>
      {!dolares ? (
        <p className="text-gray-500">Cargando...</p>
      ) : (
        <ul className="space-y-1">
          <li>🟢 Oficial: <strong className="text-green-700">${dolares.oficial}</strong></li>
          <li>🔵 Blue: <strong className="text-blue-700">${dolares.blue}</strong></li>
          <li>🟣 MEP: <strong className="text-purple-700">${dolares.mep}</strong></li>
          <li>🟡 CCL: <strong className="text-yellow-600">${dolares.ccl}</strong></li>
        </ul>
      )}
    </div>
  );
};

export default DolarCotizacion;
