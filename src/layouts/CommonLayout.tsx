import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import styleConfig from "@/configurations/style.config";
import { CssBaseline, ThemeProvider } from "@mui/material";

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
  const index = props.noindex ? `noindex` : `index, follow`;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content={`${index}`} />
        <meta
          name="viewport"
          content={
            "width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"
          }
        />
        <title>{props.title}</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content={props.keywords ? props.keywords.join(`, `) : ""}
        />
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="manifest.json" />
      </Head>
      <>
        <ThemeProvider theme={styleConfig.theme}>
          <CssBaseline />
          <Header />
          <main role="main" className="main">
            {props.children}
          </main>
          <Footer />
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
