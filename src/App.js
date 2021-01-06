import React, { Fragment } from "react";
import "./index.css";
import "./App.css";
import VideoList from "./ui/VideoList";
import NewVideoForm from "./ui/NewVideoForm";
import VideoPlayer from "./ui/VideoPlayer";

const App = () => {
  return (
    <Fragment>
      {/*<VideoList />*/}
      <VideoPlayer />
      {/*<NewVideoForm />*/}
    </Fragment>
  );
};

export default App;
