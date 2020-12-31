import React, { useState } from "react";

export default function NewVideoForm() {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [cover, setCover] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  function save() {
    const newVideo = {
      title,
      duration,
      cover,
      videoUrl,
    };
    //function
    console.log(newVideo);
    resetFields();
  }

  function resetFields() {
    setTitle("");
    setDuration("");
    setCover("");
    setVideoUrl("");
  }

  return (
    <div>
      <label htmlFor=""> Titulo </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor=""> Duração </label>
      <input
        type="text"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <label htmlFor=""> Foto do Video </label>
      <input
        type="text"
        value={cover}
        onChange={(e) => setCover(e.target.value)}
      />

      <label htmlFor=""> Url do Video </label>
      <input
        type="text"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />

      <button onClick={save}> Salvar </button>
    </div>
  );
}
