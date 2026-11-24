import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rubina Pokhrel — Full Stack Developer",
    short_name: "Rubina",
    description: "Full Stack Developer portfolio — enterprise ERP, payment and real-time systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#08080a",
    theme_color: "#08080a",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}