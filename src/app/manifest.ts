import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jordan Perez — Space Portfolio",
    short_name: "Jordan Perez",
    description:
      "Space portfolio of Jordan Perez, a Full Stack Engineer building AI products and production systems across fintech and SaaS.",
    start_url: "/",
    display: "standalone",
    background_color: "#02010a",
    theme_color: "#02010a",
    lang: "en",
    categories: ["portfolio", "technology", "productivity"],
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
