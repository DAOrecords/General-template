import React, { useEffect, useState } from 'react';
import loaderIcon from "../assets/player-loader.gif";


export default function PlayerControls({playing, setPlay, dark = true, loading, isAlbum, audioRef}) {
  const [timeoutId, setTimeoutId] = useState(setTimeout(timeoutFunc, 1000));
  const [time, setTime] = useState("0");
  
  function timeoutFunc() {
    setTime(audioRef.current.currentTime);
    /*if (playerRef.current.currentTime === playerRef.current.duration) {
      if (selectedSong === list.length-1) {
        setSelectedSong(0);
      } else {
        setSelectedSong(selectedSong+1);
      }
    }*/
  }

  useEffect(async () => {
    playerRef.current.volume = 0.50;
    if (playing === false) {
      clearTimeout(timeoutId)
    } else {
      setTimeoutId(setTimeout(timeoutFunc, 1000));
    }
    /*return () => {
      setTimeoutId(clearTimeout(timeoutId))
    };*/
  }, [playing]);

  function stopPlaying() {
    setPlay(false);
  }

  function startPlaying() {
    setPlay(true);
  }

  function formatTime(input_seconds) {
    let dateObj = new Date(input_seconds * 1000);
    let hours = dateObj.getUTCHours();
    let minutes = dateObj.getUTCMinutes();
    let seconds = dateObj.getSeconds();

    let timeString =  (hours? hours.toString().padStart(0, '0') + ':' : "") + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    
    return timeString;
  }


  return (
    <section id='playerBox'>
      {audioRef.current && 
        <input 
          className={dark? "musicControlsSlider" :  "musicControlsSlider musicControlsSliderWhite"}
          type={"range"}
          min={"0"}
          max={audioRef.current.duration}
          value={time}
          onChange={(e) => {
            audioRef.current.currentTime = e.target.value;
            setTime(audioRef.current.currentTime);
          }}
        />
      }

      <p id="playerTime">
        {formatTime(time)}
      </p>

      {playing
        ? <button onClick={stopPlaying}  className='playerButton'><PauseIcon  /></button>
        : <button onClick={startPlaying} className='playerButton'><PlayIcon /></button>
      }
    </section>
  )
}

function PlayIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="black"/>
      <path d="M27.3027 20.0727L15.0527 27.1452L15.0527 13.0001L27.3027 20.0727Z" fill="white"/>
    </svg>
  );
}

function PauseIcon() {
  return(
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="black"/>
      <path d="M14 13H18V27H14V13Z" fill="white"/>
      <path d="M22 13H26V27H22V13Z" fill="white"/>
    </svg>
  );
}

function PrevIcon() {
  return(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" transform="rotate(-180 12 12)" fill="black"/>
      <path d="M11.1632 11.9565L17.0526 8.55626L17.0526 15.3568L11.1632 11.9565Z" fill="white"/>
      <path d="M5.24214 11.9565L11.1316 8.55626L11.1316 15.3568L5.24214 11.9565Z" fill="white"/>
    </svg>
  )
}

function NextIcon() {
  return(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="black"/>
      <path d="M12.8368 12.0436L6.94737 15.4439L6.94737 8.64331L12.8368 12.0436Z" fill="white"/>
      <path d="M18.7579 12.0436L12.8685 15.4439L12.8685 8.64331L18.7579 12.0436Z" fill="white"/>
    </svg>
  )
}