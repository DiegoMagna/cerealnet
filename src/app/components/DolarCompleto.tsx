"use client";

import React, { useEffect, useState } from "react";

type Cotizaciones = {
  oficial: number;
  blue: number;
  mep: number;
  ccl: number;
};

const DolarCompleto = () => {
  const [cotizaciones, setCotizaciones] = useState<Cotizaciones | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDolares = async () => {
      try {
        const response = await fetch("/api/dolar-blue");

        if (!response.ok) {
          throw new Error("Error al obtener la cotización del dólar");
        }

        const data = await response.json();
        setCotizaciones(data);
      } catch (err) {
        console.error("Error al obtener la cotización del dólar:", err);
        setError("No se pudo cargar la cotización.");
      }
    };

    fetchDolares();
  }, []);

  const formatearNumero = (valor: number | undefined) => {
    return typeof valor === "number" ? valor.toFixed(2) : "No disponible";
  };

  if (error) {
    return (
      <div className="bg-red-100 p-2 rounded-lg text-red-700 text-center mx-auto max-w-sm text-xs">
        <h2 className="text-sm font-semibold">⚠️ Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!cotizaciones) {
    return <p className="text-center text-gray-500 text-xs">Cargando cotizaciones...</p>;
  }

  return (
    <div className="bg-[#f8f9fa] p-3 rounded-lg shadow-md text-center mx-auto max-w-sm">
      <h2 className="text-md font-semibold text-[#3d3623] mb-2">💵 Cotización del Dólar</h2>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-white p-2 rounded-md shadow flex flex-col items-center">
          <strong>🟢 Oficial</strong>
          <p className="text-green-600 font-bold">${formatearNumero(cotizaciones.oficial)}</p>
        </div>
        <div className="bg-white p-2 rounded-md shadow flex flex-col items-center">
          <strong>🔵 Blue</strong>
          <p className="text-blue-600 font-bold">${formatearNumero(cotizaciones.blue)}</p>
        </div>
        <div className="bg-white p-2 rounded-md shadow flex flex-col items-center">
          <strong>🟣 MEP</strong>
          <p className="text-purple-600 font-bold">${formatearNumero(cotizaciones.mep)}</p>
        </div>
        <div className="bg-white p-2 rounded-md shadow flex flex-col items-center">
          <strong>🟡 CCL</strong>
          <p className="text-yellow-600 font-bold">${formatearNumero(cotizaciones.ccl)}</p>
        </div>
      </div>

      <p className="text-gray-500 text-xs mt-2">📅 Actualizado en tiempo real</p>
    </div>
  );
};

export default DolarCompleto;
