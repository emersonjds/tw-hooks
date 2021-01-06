import React, { useEffect, useRef, useState } from "react";

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
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    videoElement.addEventListener("play", play);
    videoElement.addEventListener("pause", pause);
    videoElement.addEventListener("seeked", onProgress);

    return () => {
      videoElement.removeEventListener("play", play);
      videoElement.removeEventListener("pause", pause);
      videoElement.removeEventListener("seeked", onProgress);
    };
  }, [video]);

  const play = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };
  const pause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };
  const onProgress = () => {};

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
        <div className="controls">
          <button onClick={isPlaying ? pause : play}>
            {isPlaying ? "|| Pause" : "|> Play "}
          </button>
          <span>10:12 / 20:00</span>
          <input type="range" min={0} max={video.duration} step={0.1} />
        </div>
        <h2>{video.title}</h2>
      </div>
    </>
  );
}
