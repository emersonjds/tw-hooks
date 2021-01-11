import React, { createContext, useState } from "react";

export const themes = {
  light: "white",
  dark: "black",
};

export const ThemeContext = createContext(themes.light);

export const ThemeProvider = ({ children }) => {
  const [themeContext, setThemeContext] = useState(themes.light);

  const changeTheme = () =>
    setThemeContext(themes.light ? themes.dark : themes.light);

  return <div value={{ value: themeContext, changeTheme }}>{children}</div>;
};
