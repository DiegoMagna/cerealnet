"use client"; // 🔹 Este componente debe ser "client" porque usa Suspense

import React, { Suspense } from "react";
import MarketPrices from "./MarketPrices";
import Weather from "./Weather";

const ClimaMercados = () => {
  return (
    <section className="md:w-1/4 space-y-4 flex flex-col">
      <Suspense fallback={<p className="text-gray-600">Cargando mercados...</p>}>
        <MarketPrices />
      </Suspense>
      <Suspense fallback={<p className="text-gray-600">Cargando clima...</p>}>
        <Weather />
      </Suspense>
    </section>
  );
};

export default ClimaMercados;
