import React, { useEffect, useState } from 'react';


export default function PlayerControls({playing, setPlay, dark = true, loading, isAlbum, listLength, selectedSong, changeSong, audioRef}) {
  const [timeoutId, setTimeoutId] = useState(setTimeout(timeoutFunc, 1000));
  const [time, setTime] = useState("0");
  const mobile = window.innerWidth < 1200;
  
  function timeoutFunc() {
    setTime(audioRef.current.currentTime);
    if (isAlbum && audioRef.current.currentTime === audioRef.current.duration) {
      if (selectedSong === listLength-1) {
        changeSong(0);
      } else {
        changeSong(selectedSong+1);
      }
    }
  }

  useEffect(async () => {
    audioRef.current.volume = 0.50;
    if (playing === false) {
      clearTimeout(timeoutId)
    } else {
      clearTimeout(timeoutId)
      setTimeoutId(setTimeout(timeoutFunc, 1000));
    }
    /*return () => {
      setTimeoutId(clearTimeout(timeoutId))
    };*/
  }, [playing, selectedSong]);

  function stopPlaying() {
    setPlay(false);
  }

  function startPlaying() {
    setPlay(true);
  }

  function nextSong() { 
    console.table({selectedSong, listLength}, )
    if (selectedSong === listLength-1) {
      changeSong(0);
    } else {
      changeSong(selectedSong+1);
    }
  }

  function previousSong() {
    if (selectedSong === 0) {
      changeSong(listLength-1);
    } else {
      changeSong(selectedSong-1);
    }
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
          key={audioRef.current.duration}
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

      <div id="playerButtons">
        {isAlbum && <button onClick={previousSong}  className='playerButton'><PrevIcon  /></button>}
        {playing
          ? <button onClick={() => {  audioRef.current.pause(); stopPlaying();  }}  className='playerButton'><PauseIcon size={mobile? "32" : "40"} /></button>
          : <button onClick={() => {  audioRef.current.play(); startPlaying();  }} className='playerButton'><PlayIcon size={mobile? "32" : "40"} /></button>
        }
        {isAlbum && <button onClick={nextSong}  className='playerButton'><NextIcon  /></button>}
      </div>
    </section>
  )
}

function PlayIcon({size = 40}) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="black"/>
      <path d="M27.3027 20.0727L15.0527 27.1452L15.0527 13.0001L27.3027 20.0727Z" fill="white"/>
    </svg>
  );
}

function PauseIcon({size = 40}) {
  return(
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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