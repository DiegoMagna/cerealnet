import Parser from "rss-parser";

const parser = new Parser({
  customFields: {
    item: ["media:content", "enclosure", "description", "content:encoded"],
  },
});

export async function getNews() {
  try {
    // Fuentes RSS
    const sources = [
      "https://www.infocampo.com.ar/feed/",
      "https://news.agrofy.com.ar/rss.xml",
      "https://www.agrositio.com/rss.xml",
    ];

    const feed = await parser.parseURL(sources[0]); // Vuelve a hacer la petición directa

    // Extraer noticias con imagen
    const noticias = feed.items.slice(0, 5).map((noticia) => {
      let imageUrl = "";

      // 1️⃣ Si el RSS incluye <enclosure url="imagen.jpg" />
      if (noticia.enclosure?.url) {
        imageUrl = noticia.enclosure.url;
      }

      // 2️⃣ Si el RSS incluye <media:content url="imagen.jpg" />
      if (noticia["media:content"]?.url) {
        imageUrl = noticia["media:content"].url;
      }

      // 3️⃣ Si la imagen está dentro del <description>
      if (!imageUrl && noticia.description) {
        const imgMatch = noticia.description.match(/<img.*?src=["'](.*?)["']/);
        if (imgMatch) {
          imageUrl = imgMatch[1]; // Extrae la URL de la imagen dentro del HTML
        }
      }

      // 4️⃣ Si la imagen está en <content:encoded>
      if (!imageUrl && noticia["content:encoded"]) {
        const imgMatch = noticia["content:encoded"].match(/<img.*?src=["'](.*?)["']/);
        if (imgMatch) {
          imageUrl = imgMatch[1]; // Extrae la URL de la imagen dentro del HTML
        }
      }

      return {
        title: noticia.title || "Título no disponible",
        link: noticia.link || "#",
        image: imageUrl || "/no-image.jpg", // Imagen por defecto si no se encuentra ninguna
      };
    });

    return noticias;
  } catch (error) {
    console.error("Error obteniendo noticias:", error);
    return [];
  }
}
