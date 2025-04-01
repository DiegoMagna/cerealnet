"use client";

import React, { useEffect, useState } from "react";

type Cotizacion = {
  nombre: string;
  compra: number;
  venta: number;
};

const DolarCompleto = () => {
  const [cotizaciones, setCotizaciones] = useState<Record<string, Cotizacion> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDolares = async () => {
      try {
        const response = await fetch("/api/dolar-blue");
        if (!response.ok) throw new Error("Error al obtener la cotización del dólar");
        const data = await response.json();
        setCotizaciones(data); // Debería traer: { blue: {...}, oficial: {...}, mep: {...}, ccl: {...} }
      } catch (err) {
        console.error("Error al obtener la cotización del dólar:", err);
        setError("No se pudo cargar la cotización.");
      }
    };

    fetchDolares();
  }, []);

  const mostrarPrecio = (valor?: number) => {
    return typeof valor === "number" ? `$${valor.toFixed(2)}` : "No disponible";
  };

  const renderTarjeta = (titulo: string, key: string, color: string) => {
    const data = cotizaciones?.[key];
    return (
      <div className="bg-white p-2 rounded-md shadow flex flex-col items-center">
        <strong>{titulo}</strong>
        <p className={`${color} font-bold text-sm`}>
          Compra: {mostrarPrecio(data?.compra)}<br />
          Venta: {mostrarPrecio(data?.venta)}
        </p>
      </div>
    );
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
      {renderTarjeta("🟢 Oficial", "oficial", "text-green-600")}
  {renderTarjeta("🔵 Blue", "blue", "text-blue-600")}
  {renderTarjeta("🟣 MEP", "mep", "text-purple-600")}
  {renderTarjeta("🟡 CCL", "ccl", "text-yellow-600")}
  {renderTarjeta("💳 Tarjeta", "tarjeta", "text-pink-600")}
  {renderTarjeta("🏦 Mayorista", "mayorista", "text-indigo-600")}
  {renderTarjeta("🧠 Cripto", "cripto", "text-teal-600")}
      </div>

      <p className="text-gray-500 text-xs mt-2">📅 Actualizado en tiempo real</p>
    </div>
  );
};

export default DolarCompleto;
