import React, { Fragment } from "react";
import "./index.css";
import "./App.css";

import VideoList from "./ui/VideoList";
import VideoPlayer from "./ui/VideoPlayer";
import NewVideoForm from "./ui/NewVideoForm";
import VideoContext from "./data/video/VideoContext"

const App = () => {
	return (
		<Fragment>
			{/*<ThemeProvider>*/}
			{/*  <div className="App">*/}
			{/*    <TestContext />*/}
			{/*  </div>*/}
			{/*</ThemeProvider>*/}

			<VideoContext>
				<VideoList />
        <VideoPlayer/>
        <NewVideoForm/>
			</VideoContext>

		</Fragment>
	);
};

export default App;
