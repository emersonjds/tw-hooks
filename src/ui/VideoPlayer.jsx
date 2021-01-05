import React, { useEffect, useRef, useState } from "react";
import TimeService from "../data/services/TimeService";

const _selectedVideo = {
  url: "https://www.youtube.com/watch?v=3zilTir2yWs",
  duration: "10",
  cover:
    "https://i.ytimg.com/vi/3zilTir2yWs/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLARm8TZMFHWXDUCroj0KQbkG_Jm0Q",
  title: "Video Name",
};

export default function VideoPlayer() {
  const video = _selectedVideo;
  const videoRef = useRef(null);
  const progressTimer = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.addEventListener("play", play);
    videoElement.addEventListener("pause", pause);
    videoElement.addEventListener("seeked", onProgress);

    setTime(0);
    pause();

    return () => {
      videoElement.removeEventListener("play", play);
      videoElement.removeEventListener("pause", pause);
      videoElement.removeEventListener("seeked", onProgress);
    };
  }, [video]);

  useEffect(() => {
    clearInterval(progressTimer.current);
    if (isPlaying) {
      progressTimer.current = setInterval(onProgress, 1000);
    }
  }, [isPlaying]);

  function play() {
    videoRef.current.play();
    setIsPlaying(true);
  }

  function pause() {
    videoRef.current.pause();
    setIsPlaying(false);
  }

  function onProgress() {
    setProgress(videoRef.current.currentTime);
  }

  function onChangeProgress(event) {
    setTime(event.target.value);
  }

  function setTime(time) {
    videoRef.current.currentTime = time;
    onProgress();
  }

  return (
    <div className="video_player">
      <video
        width="200"
        height="200"
        poster={video.cover}
        ref={videoRef}
        resource={video.url}
      />
      {video.url && (
        <>
          <div className="video_controls">
            <button className="video_button" onClick={isPlaying ? pause : play}>
              {isPlaying ? "pause" : "start"}
            </button>
            <span>
              {TimeService.formatTime(Math.round(progress))} /{" "}
              {TimeService.formatTime(video.duration)}
            </span>
            <input
              type="range"
              value={progress}
              min={0}
              max={video.duration}
              step={0.1}
              onChange={onChangeProgress}
            />
          </div>
          <h2>{video.title}</h2>
        </>
      )}
    </div>
  );
}
