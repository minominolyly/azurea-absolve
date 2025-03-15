import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

const urlPrefix = process.env.URL_PREFIX ? `/${process.env.URL_PREFIX}` : ``;

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  cacheOnNavigation: true,
});

const nextConfig: NextConfig = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  output: "export",
  trailingSlash: true,
  reactStrictMode: false,
  images: { unoptimized: true },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

export default withSerwist(nextConfig);
