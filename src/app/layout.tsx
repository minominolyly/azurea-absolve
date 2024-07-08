import AppConfig from "@/configurations/app.config";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

const image = `${AppConfig.BASE_URL}/images/eyecatch.png`;

const DESCRIPTION = "「AZUREA-空の唄-」のギルド「Absolve」のページです。";

export const metadata: Metadata = {
  title: {
    default: "Absolve@AZUREA-空の唄-",
    template: "%s / Absolve@AZUREA-空の唄-",
  },
  description: DESCRIPTION,
  robots: {
    index: false,
  },
  icons: [
    `${AppConfig.BASE_URL}/favicon.ico`
  ],
  manifest: `${AppConfig.BASE_URL}/manifest.json`,
  openGraph: {
    title: {
      default: "Absolve@AZUREA-空の唄-",
      template: "%s / Absolve@AZUREA-空の唄-",
    },
    type: "website",
    url: AppConfig.BASE_URL,
    images: {
      url: image,
    }
  },
  twitter: {
    card: "summary_large_image",
    site: "@minominolyly",
    creator: "@minominolyly",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@minominolyly" />
        <meta name="twitter:creator" content="@minominolyly" />
      </head>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-NZGR29CM9S" />
    </html>
  );
}
