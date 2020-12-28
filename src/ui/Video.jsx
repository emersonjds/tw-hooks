import React from "react";

const Video = ({ videoObject, onClick }) => {
  const video = videoObject || {};

  return (
    <li onClick={() => onClick(video)}>
      <img src={video.cover} alt={video.title} />
      <span>{video.duration}</span>
      <h2>{video.title}</h2>
    </li>
  );
};

export default Video;
