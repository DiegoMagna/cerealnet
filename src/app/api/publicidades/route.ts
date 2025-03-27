import { NextResponse } from "next/server";

// 🔹 Simulación de una tabla "publicidades"
const publicidadesA = [
  { id: 1, estado: 1, tipo: "video", imagen: "/publicidad1.mp4", url: "https://www.madrygal.com.ar" },
  { id: 2, estado: 1, tipo: "video", imagen: "/publicidad2.mp4", url: "https://www.instagram.com/estudio_argenzio_luezas" },
];

const publicidadesB = [
  { id: 4, estado: 1, tipo: "video", imagen: "/publicidad3.mp4", url: "https://www.kernelinformatica.com.ar" },
  { id: 5, estado: 1, tipo: "video", imagen: "/publicidad4.mp4", url: "/contacto" },
];

// ✅ Función para manejar la solicitud GET
export async function GET(req: Request) {
  try {
    // ✅ Convertimos `req.url` en una instancia de URL para acceder a los parámetros de búsqueda
    const url = new URL(req.url);
    const tipo = url.searchParams.get("tipo")?.toUpperCase() || "A"; // 🔍 Por defecto, carga publicidadesA

    console.log("🔍 Tipo de publicidades solicitado:", tipo); // ✅ Log para debug

    // ✅ Filtrar solo las publicidades activas (estado === 1)
    const publicidades = (tipo === "B" ? publicidadesB : publicidadesA).filter((pub) => pub.estado === 1);

    console.log("📢 Publicidades enviadas:", publicidades); // ✅ Log para ver qué datos se envían

    // ✅ Retorna la lista de publicidades como JSON
    return NextResponse.json(publicidades);
  } catch (error) {
    console.error("❌ Error en la API de publicidades:", error);
    return NextResponse.json({ error: "No se pudieron obtener las publicidades" }, { status: 500 });
  }
}
