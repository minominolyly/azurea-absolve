"use client";
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import JsonLD from "@/components/JsonLD";
import minolithConfig from "@/configurations/minolith.config";
import styleConfig from "@/configurations/style.config";
import "@/sass/common.scss";
import localStorageUtility from "@/utilities/localStorageUtility";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { ColorScheme, Minolith } from "react-minolith";
import { Thing } from "schema-dts";
import CommonLayoutProps from "./CommonLayoutProps";

export default function CommonLayout<T extends Thing>(
  props: CommonLayoutProps<T>
) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");

  useEffect(() => {
    const colorScheme =
      localStorageUtility.getData<ColorScheme>("color-scheme");
    if (colorScheme) {
      setColorScheme(colorScheme);
    } else {
      if (typeof window !== "undefined") {
        const isDark =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (isDark) {
          setColorScheme("dark");
          localStorageUtility.setData<string>("color-scheme", "dark");
        } else {
          setColorScheme("light");
          localStorageUtility.setData<string>("color-scheme", "light");
        }
      }
    }
  }, []);

  const switchColorScheme = () => {
    const nextColorScheme = colorScheme === "light" ? "dark" : "light";
    localStorageUtility.setData<string>("color-scheme", nextColorScheme);
    setColorScheme(nextColorScheme);
  };

  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <ThemeProvider theme={styleConfig.theme}>
        <Minolith
          id={props.id}
          cssVariableSetting={minolithConfig.cssVariableSetting}
          colorScheme={colorScheme}
          style={{
            ["--minolith-font-family-main" as any]:
              "var(--font-family--noto-serif-jp)",
            ["--minolith-font-family-heading" as any]:
              "var(--font-family--new-tegomin)",
          }}
        >
          <AppHeader
            isColorSchemeDark={colorScheme === "dark"}
            switchColorScheme={switchColorScheme}
          />
          <main role="main" className="main">
            {props.children}
          </main>
          <AppFooter />
        </Minolith>
      </ThemeProvider>
      {props.jsonLDs && (
        <JsonLD id={`${props.id}--json-ld`} jsonLDs={props.jsonLDs} />
      )}
    </IconContext.Provider>
  );
}
