import React, { Fragment } from "react";
import "./index.css";
import "./App.css";
import VideoList from "./ui/VideoList";
import NewVideoForm from "./ui/NewVideoForm";

const App = () => {
  return (
    <Fragment>
      <VideoList />
      <NewVideoForm />
    </Fragment>
  );
};

export default App;
