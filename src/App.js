import React, { Fragment } from "react";
import "./App.css";

import VideoList from "./ui/VideoList";
import VideoPlayer from "./ui/VideoPlayer";
import NewVideoForm from "./ui/NewVideoForm";
import VideoContext from "./data/video/VideoContext";

const App = () => {
  return (
    <VideoContext>
      <div className="container">
        <div className="top-container">
          <VideoPlayer />
          <NewVideoForm />
        </div>
        <div className="bottom-container">
          <VideoList />
        </div>
      </div>
    </VideoContext>
  );
};

export default App;
{
  /*<ThemeProvider>*/
}
{
  /*  <div className="App">*/
}
{
  /*    <TestContext />*/
}
{
  /*  </div>*/
}
{
  /*</ThemeProvider>*/
}
