import React from "react";

import { ThemeContext } from "../../data/ThemeProvider";

export const TestContext = () => {
  return (
    //   consumindo dados do contexto
    <ThemeContext.Consumer>
      {(theme) => {
        return <h1 onClick={theme.changeTheme}>{theme.value}</h1>;
      }}
    </ThemeContext.Consumer>
  );
};

export default TestContext;
