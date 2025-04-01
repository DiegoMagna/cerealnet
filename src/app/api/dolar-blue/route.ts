// src/app/api/dolar-blue/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://dolarapi.com/v1/dolares", { cache: "no-store" });
    if (!response.ok) throw new Error(`Error en la API externa: ${response.statusText}`);

    const data = await response.json();
    console.log("📊 Datos recibidos de dolarapi.com:", data);

    const getData = (nombre: string) => data.find((d: any) => d.nombre.includes(nombre)) || null;

    return NextResponse.json({
      oficial: getData("Oficial"),
      blue: getData("Blue"),
      mep: getData("Bolsa") ?? getData("MEP"),
      ccl: getData("Contado") ?? getData("CCL"),
      tarjeta: getData("Tarjeta"),
      mayorista: getData("Mayorista"),
      cripto: getData("Cripto"),
    });
  } catch (error) {
    console.error("❌ Error en API de cotización:", error);
    return NextResponse.json({ error: "No se pudieron obtener las cotizaciones" }, { status: 500 });
  }
}
