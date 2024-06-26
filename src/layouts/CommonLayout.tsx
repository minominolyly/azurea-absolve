"use client";
import "../sass/common.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import styleConfig from "@/configurations/style.config";
import { CssBaseline, ThemeProvider } from "@mui/material";
import AppConfig from "@/configurations/app.config";
import PasscodeModal from "@/components/PasscodeModal";

const initialProps: CommonLayoutProps = {
  lang: "ja",
  keywords: [],
  title: "",
  type: "article",
  noindex: false,
};

export default function CommonLayout(
  props: CommonLayoutProps = initialProps
): JSX.Element {
  const metaDescription = props.description;
  const image = props.image ? props.image : `${AppConfig.BASE_URL}/images/eyecatch.png`;
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content={props.keywords ? props.keywords.join(`, `) : ""}
        />
        <meta property="og:url" content={`${AppConfig.BASE_URL}`} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={image} />
      </Head>
      <>
        <ThemeProvider theme={styleConfig.theme}>
          <CssBaseline />
          <Header />
          <main role="main" className="main">
            {props.children}
          </main>
          <Footer />
          <PasscodeModal />
        </ThemeProvider>
      </>
    </>
  );
}

interface CommonLayoutProps {
  description?: string | undefined;
  lang?: string | undefined;
  url?: string | undefined;
  meta?: any[] | undefined;
  keywords?: string[] | undefined;
  title: string;
  image?: string | undefined;
  type?: string | undefined;
  noindex?: boolean | undefined;
  children?: React.ReactNode | undefined;
  background?: React.ReactNode | undefined;
}
