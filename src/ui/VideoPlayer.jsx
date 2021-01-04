import React from "react";
import "./styles/videoStyle.css";

const _selectedVideo = {
  id: Math.random().toFixed(2) * 10,
  title: "Video",
  duration: "10",
  cover: "https://i.ytimg.com/vi/VfGW0Qiy2I0/hq720.jpg",
  url: "https://www.youtube.com/watch?v=VfGW0Qiy2I0",
};

export default function VideoPlayer() {
  return (
    <div className="video_player">
      <video
        className="video_player__video"
        src={_selectedVideo.url}
        poster={_selectedVideo.cover}
        height="200"
        width="300"
      ></video>
      <div className="video_player__controls">
        <button>Play</button>
        <span>10:20 / 20:00</span>
        <input type="range" min={0} max={_selectedVideo.duration} step={0.1} />
      </div>
      <h2 className="video_player__title">{_selectedVideo.title}</h2>
    </div>
  );
}
