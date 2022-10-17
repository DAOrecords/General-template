import React from 'react';
import loaderIcon from "../../assets/player-loader.gif";


export default function PlayerControls({playing, setPlay, loading}) {
  function stopPlaying() {
    setPlay(false);
  }

  function startPlaying() {
    setPlay(true);
  }

  return (
    <div id='lineEqControls'>
      {playing
        ? <button onClick={stopPlaying}  className='playerButton'><PauseIcon  /></button>
        : <button onClick={startPlaying} className='playerButton'><PlayIcon /></button>
      }
    </div>
  )
}

function PlayIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="29.5" fill="#F2F2F2"/>
      <path d="M23.25 18.75L42.75 30L23.25 41.25V18.75Z" fill="black"/>
    </svg>
  );
}

function PauseIcon() {
  return(
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="29.5" fill="#F2F2F2"/>
      <path d="M20 16H26V44H20V16Z" fill="black"/>
      <path d="M34 16H40V44H34V16Z" fill="black"/>
    </svg>
  );
}