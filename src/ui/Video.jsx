import React, { useState, useEffect } from "react";
import TimeService from "../data/services/TimeService";


const Video = ({ videoObject, onClick }) => {
  const video = videoObject || {};
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setCounter((counter) => counter + 1);
  }, []);

  return (
    <>
      <li onClick={() => onClick(video)}>
        <img src={video.cover} alt={video.title} />
        <span>{TimeService.formatTime(video.duration)}</span>
        <h2>{video.title}</h2>
      </li>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>
        Valor de titulo: {title} - Valor do contador: {counter}
      </div>
    </>
  );
};

export default Video;
