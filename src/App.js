import React, { Fragment } from "react";
import "./index.css";
import "./App.css";
import VideoList from "./ui/VideoList";
import NewVideoForm from "./ui/NewVideoForm";
import VideoPlayer from "./ui/VideoPlayer";

import { ThemeProvider } from "./data/ThemeProvider";
import TestContext from "./ui/TestContext";

const App = () => {
  return (
    <Fragment>
      <ThemeProvider>
        <div className="App">
          <TestContext />
        </div>
      </ThemeProvider>

      {/*<VideoList />*/}
      {/* <VideoPlayer /> */}
      {/*<NewVideoForm />*/}
    </Fragment>
  );
};

export default App;
