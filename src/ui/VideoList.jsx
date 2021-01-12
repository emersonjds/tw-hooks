import React, { useContext } from "react";
import Video from "./Video";
import { videoStore } from "../data/video/VideoContext";
import "./styles/videoStyle.css";

const VideoList = () => {
  const [videosState] = useContext(videoStore);

  function onSelectedVideo(video) {
    console.log(video);
  }

  return (
    <ul className="video-list">
      {videosState.videoList.map((video) => (
        <Video key={video.id} onClick={onSelectedVideo} videoObject={video} />
      ))}
    </ul>
  );
};

export default VideoList;
