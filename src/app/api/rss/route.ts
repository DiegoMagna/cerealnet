import { NextResponse } from "next/server";
import Parser from "rss-parser";

export async function GET() {
  const parser = new Parser();
  const sources = ["https://www.infocampo.com.ar/feed/"];

  try {
    const feed = await parser.parseURL(sources[0]);

    if (!feed || !feed.items) {
      throw new Error("No se pudieron obtener noticias del RSS");
    }

    const noticias = feed.items.slice(0, 10).map((noticia) => {
      let imageUrl = "";

      // 🔹 Intentamos obtener la imagen desde diferentes campos
      if (noticia.enclosure?.url) {
        imageUrl = noticia.enclosure.url;
      }
      if (noticia["media:content"]?.url) {
        imageUrl = noticia["media:content"].url;
      }
      if (!imageUrl && noticia.description) {
        const imgMatch = noticia.description.match(/<img.*?src=["'](.*?)["']/);
        if (imgMatch) {
          imageUrl = imgMatch[1];
        }
      }
      if (!imageUrl && noticia["content:encoded"]) {
        const imgMatch = noticia["content:encoded"].match(/<img.*?src=["'](.*?)["']/);
        if (imgMatch) {
          imageUrl = imgMatch[1];
        }
      }

      return {
        title: noticia.title || "Título no disponible",
        link: noticia.link || "#",
        image: imageUrl || "/no-image.jpg", // 🔹 Usamos la URL original o una imagen por defecto
      };
    });

    return NextResponse.json(noticias);
  } catch (error) {
    console.error("Error obteniendo RSS:", error);
    return NextResponse.json([], { status: 500 });
  }
}
