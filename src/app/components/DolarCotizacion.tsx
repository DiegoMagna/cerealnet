"use client";

import React, { useEffect, useState } from "react";

type DolarInfo = {
  compra: number | string;
  venta: number | string;
};

const DolarCotizacion = () => {
  const [dolar, setDolar] = useState<{
    oficial: DolarInfo;
    blue: DolarInfo;
    mep: DolarInfo;
    ccl: DolarInfo;
    mayorista: DolarInfo;
    tarjeta: DolarInfo;
    cripto: DolarInfo;
  } | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDolar = async () => {
      try {
        const res = await fetch("/api/dolar-blue");
        const data = await res.json();
        setDolar(data);
      } catch (err) {
        console.error("Error al obtener la cotización del dólar:", err);
        setError("No se pudo cargar la cotización.");
      }
    };

    fetchDolar();
  }, []);

  const mostrarPrecio = (valor: number | string) =>
    typeof valor === "number" ? `$${valor}` : valor;

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  if (!dolar) {
    return <p className="text-gray-600">Cargando cotización...</p>;
  }

  return (
    <div className="bg-white p-4 rounded shadow text-xs">
      <h3 className="text-md font-bold text-gray-800 mb-2">💵 Cotizaciones del Dólar</h3>

      {["oficial", "blue", "mep", "ccl", "mayorista", "tarjeta", "cripto"].map((tipo) => (
  <div key={tipo} className="mb-2">
    <p className="font-semibold capitalize text-gray-700">
      {{
        oficial: "🟢 Oficial",
        blue: "🔵 Blue",
        mep: "🟣 MEP",
        ccl: "🟡 CCL",
        mayorista: "🏦 Mayorista",
        tarjeta: "💳 Tarjeta",
        cripto: "🧠 Cripto",
      }[tipo as keyof typeof dolar]}
    </p>
    <p>
      Compra: {mostrarPrecio(dolar[tipo as keyof typeof dolar].compra)}
      <br />
      Venta: {mostrarPrecio(dolar[tipo as keyof typeof dolar].venta)}
    </p>
  </div>
))}

    </div>
  );
};

export default DolarCotizacion;
