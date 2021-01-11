import React, { useContext } from "react";

import { ThemeContext } from "src/data/ThemeProvider";

export const TestContext = () => {
  const theme = useContext(ThemeContext);
  return <h1 onClick={theme.changeTheme}>{theme.value}</h1>;
};

export default TestContext;
