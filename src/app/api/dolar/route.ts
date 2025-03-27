import { NextResponse } from "next/server";

// ✅ Simulación de datos reales (esto debe venir de la API)
const cotizacionesDolar = [
  {
    moneda: "USD",
    casa: "blue",
    nombre: "Blue",
    compra: 1195,
    venta: 1215,
    fechaActualizacion: "2025-02-05T11:56:00.000Z"
  },
  {
    moneda: "USD",
    casa: "bolsa",
    nombre: "Bolsa",
    compra: 1182.7,
    venta: 1186.2,
    fechaActualizacion: "2025-02-05T11:56:00.000Z"
  },
  {
    moneda: "USD",
    casa: "contadoconliqui",
    nombre: "Contado con Liquidación",
    compra: 1193.2,
    venta: 1197.2,
    fechaActualizacion: "2025-02-05T11:56:00.000Z"
  },
  {
    moneda: "USD",
    casa: "mayorista",
    nombre: "Mayorista",
    compra: 1051.25,
    venta: 1054.25,
    fechaActualizacion: "2025-02-04T15:59:00.000Z"
  },
  {
    moneda: "USD",
    casa: "cripto",
    nombre: "Cripto",
    compra: 1206.9,
    venta: 1208.5,
    fechaActualizacion: "2025-02-05T11:56:00.000Z"
  },
  {
    moneda: "USD",
    casa: "tarjeta",
    nombre: "Tarjeta",
    compra: 1344.85,
    venta: 1396.85,
    fechaActualizacion: "2025-02-05T08:40:00.000Z"
  }
];

// ✅ Función para manejar la solicitud GET
export async function GET() {
  try {
    return NextResponse.json(cotizacionesDolar);
  } catch (error) {
    console.error("❌ Error en la API de cotización del dólar:", error);
    return NextResponse.json({ error: "No se pudieron obtener las cotizaciones" }, { status: 500 });
  }
}
