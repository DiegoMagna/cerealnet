"use client";
import React, { useEffect, useState } from "react";

const MarketPrices = () => {
  const [marketPrices, setMarketPrices] = useState([]);

  useEffect(() => {
    const fetchMarketPrices = async () => {
      try {
        const response = await fetch("/api/mercados");
        const data = await response.json();
        setMarketPrices(data);
      } catch (error) {
        console.error("Error obteniendo precios de mercado:", error);
      }
    };

    fetchMarketPrices();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-green-700">📈 Mercado de Granos</h2>
      <ul className="mt-2 space-y-1">
        {marketPrices.length > 0 ? (
          marketPrices.map((producto, index) => (
            <li key={index} className="bg-gray-50 p-2 rounded shadow-sm flex justify-between">
              <span className="text-xs">{producto.name}</span>
              <strong className="text-xs">{producto.price}</strong>
            </li>
          ))
        ) : (
          <p className="text-gray-600">Cargando precios...</p>
        )}
      </ul>
    </div>
  );
};

export default MarketPrices;
