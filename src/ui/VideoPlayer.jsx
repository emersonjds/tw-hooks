import React, { useEffect, useRef, useState } from "react";
import TimeService from "../data/services/TimeService";

const _selectedVideo = {
  url:
    "https://cdn.videvo.net/videvo_files/video/premium/video0037/small_watermarked/docklands_clocks06_preview.webm",
  duration: "10",
  cover:
    "https://media.istockphoto.com/photos/blurred-crowd-of-unrecognizable-at-the-street-picture-id1065178846",
  title: "Video Name",
};

export default function VideoPlayer() {
  const video = _selectedVideo;
  const videoRef = useRef();
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
      progressTimer.current = setInterval(onProgress(), 1000);
    }
  }, [isPlaying]);

  const play = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const onProgress = () => {
    setProgress(videoRef.current.currentTime);
  };

  const onChangeProgress = (event) => {
    setTime(event.target.value);
  };

  function setTime(time) {
    videoRef.current.currentTime = time;
    onProgress();
  }

  return (
    <>
      <div className="video_player">
        <video
          height="200"
          width="300"
          poster={video.cover}
          ref={videoRef}
          src={video.url}
        ></video>
        {video.url && (
          <>
            <div className="controls">
              <button onClick={isPlaying ? pause : play}>
                {isPlaying ? "|| Pause" : "|> Play "}
              </button>
              <span>
                {TimeService.formatTime(Math.round(progress))} /
                {TimeService.formatTime(video.duration)}
              </span>
              <input
                value={progress}
                type="range"
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
    </>
  );
}
