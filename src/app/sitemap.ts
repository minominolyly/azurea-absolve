import AppConfig from "@/configurations/app.config";
import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];
  sitemap.push({
    url: AppConfig.BASE_URL,
    images: [`${AppConfig.BASE_URL}/images/eyecatch.png`],
    lastModified: new Date(),
    priority: 1,
  });


  return sitemap;
}
