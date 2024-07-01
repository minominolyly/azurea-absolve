import AppConfig from "@/configurations/app.config";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    default: "Absolve@AZUREA-空の唄-",
    template: "%s / Absolve@AZUREA-空の唄-",
  },
  robots: {
    index: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const image = `${AppConfig.BASE_URL}/images/eyecatch.png`;
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content={
            "width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"
          }
        />
        <link rel="icon" href={`${AppConfig.BASE_URL}/favicon.ico`} />
        <link rel="manifest" href={`${AppConfig.BASE_URL}/manifest.json`} />
        <meta property="og:url" content={`${AppConfig.BASE_URL}`} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@minominolyly" />
        <meta name="twitter:creator" content="@minominolyly" />
      </head>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-NZGR29CM9S" />
    </html>
  );
}
