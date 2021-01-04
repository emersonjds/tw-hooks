import React, { Fragment } from "react";
import "./index.css";
import "./App.css";
import VideoList from "./ui/VideoList";
import NewVideoForm from "./ui/NewVideoForm";
import UseEffectDefault from "./ui/UseEffectDefault";
import UseRefComponent from "./ui/UseRefComponent";

const App = () => {
  return (
    <Fragment>
      {/* <VideoList /> */}
      {/* <NewVideoForm /> */}
      {/* <UseEffectDefault /> */}
      <UseRefComponent />
    </Fragment>
  );
};

export default App;
