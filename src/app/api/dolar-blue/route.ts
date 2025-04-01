import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://dolarapi.com/v1/dolares", { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Error en la API externa: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Datos recibidos de dolarapi.com:", data);

    const getCotizacion = (nombre: string) => {
      const result = data.find((d: any) => d.nombre.toLowerCase().includes(nombre.toLowerCase()));
      return result ? { compra: result.compra, venta: result.venta } : { compra: "No disponible", venta: "No disponible" };
    };

    return NextResponse.json({
      oficial: getCotizacion("oficial"),
      blue: getCotizacion("blue"),
      mep: getCotizacion("mep"),
      ccl: getCotizacion("contado con liquidación"),
      tarjeta: getCotizacion("tarjeta"),
      mayorista: getCotizacion("mayorista"),
      cripto: getCotizacion("cripto"),
    });
  } catch (error) {
    console.error("❌ Error obteniendo cotizaciones:", error);
    return NextResponse.json({ error: "No se pudo obtener la cotización del dólar" }, { status: 500 });
  }
}
