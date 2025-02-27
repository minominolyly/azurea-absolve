"use client";
import {
  ColorName,
  Gradation,
  Oklch,
  MinolithCssVariable,
} from "react-minolith";

type ColorInfo = {
  name: ColorName;
  hue: number;
  chroma: number;
};

const colorChromaGray = 0.03;
const colorChromaColorful = 0.15;
const colorChromaColorfulOffsetLighter = 0;
const colorChromaColorfulOffsetDarker = 0;

const colorLightness50 = 53;
const colorLightnessOffsetLighter = 4;
const colorLightnessOffsetDarker = 4;

const colorGray: ColorInfo = {
  name: "gray",
  hue: 93,
  chroma: colorChromaGray,
};
const colorRed: ColorInfo = {
  name: "red",
  hue: 0,
  chroma: colorChromaColorful,
};
const colorOrange: ColorInfo = {
  name: "orange",
  hue: 43,
  chroma: colorChromaColorful,
};

const colorYellow: ColorInfo = {
  name: "yellow",
  hue: 93,
  chroma: colorChromaColorful,
};

const colorGreen: ColorInfo = {
  name: "green",
  hue: 123,
  chroma: colorChromaColorful,
};

const colorCyan: ColorInfo = {
  name: "cyan",
  hue: 203,
  chroma: colorChromaColorful,
};

const colorBlue: ColorInfo = {
  name: "blue",
  hue: 253,
  chroma: colorChromaColorful,
};

const colorViolet: ColorInfo = {
  name: "violet",
  hue: 283,
  chroma: colorChromaColorful,
};

const colorMagenta: ColorInfo = {
  name: "magenta",
  hue: 303,
  chroma: colorChromaColorful,
};

function getColorVar(color: ColorInfo): Gradation {
  let colorVar: Gradation = {};
  for (let i = 1; i <= 19; i++) {
    const gradation = i * 5;
    const chroma =
      color.name === "gray"
        ? color.chroma
        : gradation < 50
        ? color.chroma + ((10 - i) * colorChromaColorfulOffsetDarker)
        : gradation > 50
        ? color.chroma + ((i - 10) * colorChromaColorfulOffsetLighter)
        : color.chroma;

    const lightness =
      gradation < 50
        ? colorLightness50 - (10 - i) * colorLightnessOffsetDarker
        : gradation > 50
        ? colorLightness50 + (i - 10) * colorLightnessOffsetLighter
        : colorLightness50;

    const oklch: Oklch = {
      hue: color.hue,
      lightness: lightness,
      chroma: chroma,
    };
    colorVar = Object.assign(colorVar, {
      [gradation]: oklch,
    });
  }

  return colorVar;
}

function genMinolithCssVariable(): MinolithCssVariable {
  return {
    color: {
      gray: getColorVar(colorGray),
      red: getColorVar(colorRed),
      orange: getColorVar(colorOrange),
      yellow: getColorVar(colorYellow),
      green: getColorVar(colorGreen),
      cyan: getColorVar(colorCyan),
      blue: getColorVar(colorBlue),
      violet: getColorVar(colorViolet),
      magenta: getColorVar(colorMagenta),
    },
    typography: {
      fontFamily: {
        main: "var(--font-family--noto-serif-jp)",
        heading: "var(--font-family--new-tegomin)",
      },
    },
  };
}

const cssVariableSetting = genMinolithCssVariable();

const minolithConfig = {
  cssVariableSetting,
};

export default minolithConfig;
