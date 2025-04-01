import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://dolarapi.com/v1/dolares", { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Error en la API externa: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Datos recibidos de dolarapi.com:", data);

    const getDolar = (nombre: string) => {
      const found = data.find((d: any) => d.nombre.toLowerCase().includes(nombre.toLowerCase()));
      return found ? { compra: found.compra, venta: found.venta } : { compra: "No disponible", venta: "No disponible" };
    };

    return NextResponse.json({
      oficial: getDolar("Oficial"),
      blue: getDolar("Blue"),
      mep: getDolar("MEP"),
      ccl: getDolar("CCL"),
      tarjeta: getDolar("Tarjeta"),
      mayorista: getDolar("Mayorista"),
      cripto: getDolar("Cripto"),
    });
  } catch (error) {
    console.error("Error en API de Dólar:", error);
    return NextResponse.json({ error: "No se pudo obtener la cotización del dólar." }, { status: 500 });
  }
}
