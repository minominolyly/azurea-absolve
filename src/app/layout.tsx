import AppConfig from "@/configurations/app.config";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { New_Tegomin, Noto_Serif_JP } from "next/font/google";

const image = `${AppConfig.BASE_URL}/images/eyecatch.png`;

const DESCRIPTION = "「AZUREA-空の唄-」のギルド「Absolve」のページです。";

export const metadata: Metadata = {
  applicationName: "Absolve",
  title: {
    default: "Absolve@AZUREA-空の唄-",
    template: "%s / Absolve@AZUREA-空の唄-",
  },
  description: DESCRIPTION,
  robots: {
    index: false,
  },
  icons: [`${AppConfig.BASE_URL}/favicon.ico`],
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
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@minominolyly",
    creator: "@minominolyly",
  },
};

const NotoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-family--noto-serif-jp",
  weight: "400",
});

const NewTegomin = New_Tegomin({
  subsets: ["latin"],
  variable: "--font-family--new-tegomin",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const assignedClassNames: string[] = [];
  assignedClassNames.push(NotoSerifJp.variable);
  assignedClassNames.push(NewTegomin.variable);
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
        <link rel="manifest" href={`${AppConfig.BASE_URL}/manifest.json`} />
      </head>
      <body className={assignedClassNames.join(" ")}>{children}</body>
      <GoogleAnalytics gaId="G-NZGR29CM9S" />
    </html>
  );
}
