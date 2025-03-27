import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser({
  headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  },
});

export async function GET() {
  try {
    const feed = await parser.parseURL("https://www.clarin.com/rss/lo-ultimo/");
    
    if (!feed || !feed.items) {
      throw new Error("El RSS no devolvió datos válidos.");
    }

    const noticias = feed.items.slice(0, 10).map((item) => ({
      title: item.title,
      link: item.link,
      image: item.enclosure?.url || "/no-image.jpg",
      date: item.pubDate,
    }));

    return NextResponse.json(noticias);
  } catch (error) {
    console.error("❌ Error obteniendo noticias nacionales:", error);
    return NextResponse.json({ error: "No se pudieron obtener las noticias nacionales" }, { status: 500 });
  }
}
