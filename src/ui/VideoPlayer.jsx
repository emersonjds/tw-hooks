import React, {useRef, useState, useEffect} from 'react'
import TimeService from "../data/services/TimeService";


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
