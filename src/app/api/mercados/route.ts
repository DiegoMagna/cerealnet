import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";
import fetch from "node-fetch";

export async function GET() {
  const url = "https://www.bcr.com.ar/es/mercados/mercado-de-granos/cotizaciones/cotizaciones-locales-0";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("No se pudo obtener la página");

    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // 🔹 Seleccionamos las filas de la tabla
    const rows = document.querySelectorAll("table tbody tr");
    const marketPrices = [];

    rows.forEach((row) => {
      const columns = row.querySelectorAll("td");

      // ✅ Verificamos que haya al menos 3 columnas (producto + precio)
      if (columns.length >= 3) {
        const name = columns[0].textContent.trim();  // 📌 Nombre del producto
        const price = columns[2].textContent.trim(); // 📌 Tercer columna (Precio)

        // ✅ Si el precio tiene caracteres no numéricos, filtramos solo números y comas/puntos
        const cleanedPrice = price.replace(/[^0-9.,]/g, "");

        marketPrices.push({ name, price: cleanedPrice });
      }
    });

    console.log("📊 Precios obtenidos:", marketPrices); // ✅ Log en consola para debug

    return NextResponse.json(marketPrices);
  } catch (error) {
    console.error("❌ Error en el scraping de mercado:", error);
    return NextResponse.json({ error: "No se pudieron obtener las cotizaciones" }, { status: 500 });
  }
}
