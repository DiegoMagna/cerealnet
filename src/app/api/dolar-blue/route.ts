import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 🔹 API de dolarapi.com
    const response = await fetch("https://dolarapi.com/v1/dolares", { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Error en la API externa: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Datos recibidos de dolarapi.com:", data);

    // 🔹 Extraemos las cotizaciones
    const oficialData = data.find((d: any) => d.nombre.includes("Oficial"));

    const blueData  = data.find((d: any) => d.nombre.includes("Blue"));
    let mepData = data.find((d: any) => d.nombre.includes("MEP"));
    let cclData = data.find((d: any) => d.nombre.includes("CCL"));

    // 🔹 Si el Dólar MEP o CCL no están disponibles, buscamos en dolarhoy.com
    if (!mepData || !cclData) {
      console.log("Buscando Dólar MEP y CCL en dolarhoy.com...");

      const backupResponse = await fetch("https://dolarhoy.com/cotizaciones", { cache: "no-store" });

      if (backupResponse.ok) {
        const backupHtml = await backupResponse.text();
        const mepMatch = backupHtml.match(/"venta":\s*([\d.]+).*Dólar MEP/);
        const cclMatch = backupHtml.match(/"venta":\s*([\d.]+).*Contado con Liquidación/);

        if (mepMatch) {
          mepData = { compra: parseFloat(mepMatch[1]) };
        }
        if (cclMatch) {
          cclData = { compra: parseFloat(cclMatch[1]) };
        }
      }
    }

    return NextResponse.json({
      oficial: oficialData ? oficialData.compra : "No disponible",
      blue: blueData ? blueData.compra : "No disponible",
      mep: mepData ? mepData.compra : "No disponible",
      ccl: cclData ? cclData.compra : "No disponible", // 🔹 Agregamos CCL
    });
  } catch (error) {
    console.error("Error en API de Dólar Blue, MEP y CCL:", error);
    return NextResponse.json({ error: "No se pudo obtener la cotización del dólar blue, MEP o CCL" }, { status: 500 });
  }
}
