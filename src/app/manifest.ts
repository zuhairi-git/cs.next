import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CoreScene",
    short_name: "CoreScene",
    description: "Human strategy, useful AI, and connected business systems",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#080a0b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
