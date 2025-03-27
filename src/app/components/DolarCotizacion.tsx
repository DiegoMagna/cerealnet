"use client"; // 🔹 Indica que es un componente del lado del cliente

import React, { useEffect, useState } from "react";

const DolarCotizacion = () => {
  const [cotizaciones, setCotizaciones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/dolar");
        const data = await response.json();
        setCotizaciones(data);
      } catch (error) {
        console.error("Error obteniendo la cotización del dólar:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-green-700">💲 Cotización del Dólar</h2>
      {cotizaciones.length > 0 ? (
        <ul className="mt-2 space-y-1">
          {cotizaciones.map((dolar, index) => (
            <li key={index} className="bg-gray-50 p-2 rounded shadow-sm flex justify-between">
              <span className="text-xs font-semibold">{dolar.nombre}</span> {/* ✅ Muestra el nombre del dólar */}
              <span className="text-xs">
                Compra: <strong>{dolar.compra}</strong> | Venta: <strong>{dolar.venta}</strong>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700 mt-2">Obteniendo datos...</p>
      )}
    </div>
  );
};

export default DolarCotizacion;
