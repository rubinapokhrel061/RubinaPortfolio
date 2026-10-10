import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rubina Pokhrel Portfolio", short_name: "Rubina", description: "Full Stack Developer portfolio",
    start_url: "/", display: "standalone", background_color: "#ffffff", theme_color: "#1e1b4b",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
