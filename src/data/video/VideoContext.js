import React, { createContext } from "react";

const _state = {
  selectedVideo: {
    url:
      "https://cdn.videvo.net/videvo_files/video/premium/video0037/small_watermarked/docklands_clocks06_preview.webm",
    duration: "10",
    cover:
      "https://media.istockphoto.com/photos/blurred-crowd-of-unrecognizable-at-the-street-picture-id1065178846",
    title: "Video Name",
  },
  videoList: [
    {
      id: Math.random().toFixed(2) * 10,
      title: "Video Name",
      duration: "10",
      cover:
        "https://media.istockphoto.com/photos/blurred-crowd-of-unrecognizable-at-the-street-picture-id1065178846",
      url:
        "https://cdn.videvo.net/videvo_files/video/premium/video0037/small_watermarked/docklands_clocks06_preview.webm",
    },
  ],
};

export const videoStore = createContext(_state);

const { Provider } = videoStore;

function VideoProvider({ children }) {
  return <Provider value={[_state]}>{children}</Provider>;
}

export default VideoProvider;
