import React, {useRef, useState, useEffect} from 'react'

const _selectedVideo = {
  url: '',
  duration: '',
  cover: '',
  title: ''
}

export default function VideoPlayer() {
  const video = _selectedVideo;

  return (
    <div> Video</div>
  );
}
