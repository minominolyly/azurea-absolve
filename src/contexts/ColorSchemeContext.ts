"use client";
import { createContext } from "react";
import { ColorScheme } from "react-minolith";

const ColorSchemeContext = createContext<ColorScheme>("light");

export default ColorSchemeContext;
