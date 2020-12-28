import React from "react";
import Video from "./Video";

const _list = [
    {
        id: Math.random().toFixed(2) * 10,
        title: "Emerson Silva",
        duration: "10",
        cover: "",
        url: "",
      }
];

const VideoList = () => {
  function onSelectedVideo(video) {
    console.log(video);
  }
  return (
    <ul>
      {_list.map((video) => (
        <Video key={video.id} onClick={onSelectedVideo} videoObject={video} />
      ))}
    </ul>
  );
};

export default VideoList;
