import React, { Fragment, useState } from "react";
import "./index.css";
import "./App.css";
import VideoList from "./ui/VideoList";
import NewVideoForm from "./ui/NewVideoForm";
import VideoPlayer from "./ui/VideoPlayer";

import { themes, ThemeContext } from "./data/ThemeProvider";
import TestContext from "./ui/TestContext";

const App = () => {
  const [valueTheme, setValueTheme] = useState(themes.light);

  const changeTheme = () =>
    setValueTheme(valueTheme === themes.light ? themes.dark : themes.light);

  return (
    <Fragment>
      <ThemeContext.Provider value={{ value: valueTheme, changeTheme }}>
        <div className="App">
          <button onClick={changeTheme}>Mudar tema</button>
          {valueTheme}
          <TestContext />
        </div>
      </ThemeContext.Provider>
      {/*<VideoList />*/}
      {/* <VideoPlayer /> */}
      {/*<NewVideoForm />*/}
    </Fragment>
  );
};

export default App;
