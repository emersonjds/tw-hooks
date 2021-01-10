import React, { createContext } from "react";

export const themes = {
  light: "white",
  dark: "black",
};

export const ThemeContext = createContext(themes.light);
