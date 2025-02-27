import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Absolve@AZUREA-空の唄-",
    short_name: "Absolve",
    description: "「AZUREA-空の唄-」のギルド「Absolve」のページです。",
    scope: "https://minominolyly.github.io/azurea-absolve/",
    start_url: "https://minominolyly.github.io/azurea-absolve/",
    display: "standalone",
    background_color: "#59533F",
    theme_color: "#59533F",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        "src": "images/icons/icon-72x72.png",
        "sizes": "72x72",
        "type": "image/png"
      },
      {
        "src": "images/icons/icon-96x96.png",
        "sizes": "96x96",
        "type": "image/png"
      },
      {
        "src": "images/icons/icon-128x128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "images/icons/icon-144x144.png",
        "sizes": "144x144",
        "type": "image/png"
      },
      {
        "src": "images/icons/icon-152x152.png",
        "sizes": "152x152",
        "type": "image/png"
      },
      {
        "src": "images/icons/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "images/icons/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "images/icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
  };
}
