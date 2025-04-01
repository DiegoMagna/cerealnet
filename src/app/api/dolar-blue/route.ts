import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://dolarapi.com/v1/dolares", { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Error en la API externa: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Datos recibidos de dolarapi.com:", data);

    const oficialData = data.find((d: any) => d.nombre.includes("Oficial"));
    const blueData = data.find((d: any) => d.nombre.includes("Blue"));
    let mepData = data.find((d: any) => d.nombre.includes("MEP"));
    let cclData = data.find((d: any) => d.nombre.includes("Contado con liquidación"));

    // Backup desde dolarhoy.com si faltan MEP o CCL
    if (!mepData || !cclData) {
      console.log("Buscando Dólar MEP y CCL en dolarhoy.com...");

      const backupResponse = await fetch("https://dolarhoy.com/cotizaciones", { cache: "no-store" });

      if (backupResponse.ok) {
        const html = await backupResponse.text();

        const mepCompra = html.match(/"compra":\s*([\d.]+).*Dólar MEP/);
        const mepVenta = html.match(/"venta":\s*([\d.]+).*Dólar MEP/);
        if (!mepData && mepCompra && mepVenta) {
          mepData = {
            compra: parseFloat(mepCompra[1]),
            venta: parseFloat(mepVenta[1]),
          };
        }

        const cclCompra = html.match(/"compra":\s*([\d.]+).*Contado con Liquidación/);
        const cclVenta = html.match(/"venta":\s*([\d.]+).*Contado con Liquidación/);
        if (!cclData && cclCompra && cclVenta) {
          cclData = {
            compra: parseFloat(cclCompra[1]),
            venta: parseFloat(cclVenta[1]),
          };
        }
      }
    }

    return NextResponse.json({
      oficial: oficialData
        ? { compra: oficialData.compra, venta: oficialData.venta }
        : { compra: "No disponible", venta: "No disponible" },

      blue: blueData
        ? { compra: blueData.compra, venta: blueData.venta }
        : { compra: "No disponible", venta: "No disponible" },

      mep: mepData
        ? { compra: mepData.compra ?? "No disponible", venta: mepData.venta ?? "No disponible" }
        : { compra: "No disponible", venta: "No disponible" },

      ccl: cclData
        ? { compra: cclData.compra ?? "No disponible", venta: cclData.venta ?? "No disponible" }
        : { compra: "No disponible", venta: "No disponible" },
    });
  } catch (error) {
    console.error("Error en API de Dólar:", error);
    return NextResponse.json({ error: "No se pudieron obtener las cotizaciones" }, { status: 500 });
  }
}
