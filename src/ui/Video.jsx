import React, { useState, useEffect } from "react";
import TimeService from "../data/services/TimeService";
import "../ui/styles/videoStyle.css";

const Video = ({ videoObject, onClick }) => {
  const video = videoObject || {};
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setCounter((counter) => counter + 2);
  }, []);

  return (
    <>
      <li onClick={() => onClick(video)} className="video">
        <img src={video.cover} alt={video.title} />
        <span> Tempo passado : {TimeService.formatTime(video.duration)}</span>
        <h2>{video.title}</h2>
      </li>
      {/*
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /> */}
      {/*<div>*/}
      {/*  Valor de titulo: {title} - Valor do contador: {counter}*/}
      {/*</div>*/}
    </>
  );
};

export default Video;
