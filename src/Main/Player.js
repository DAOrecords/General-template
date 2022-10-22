import React from 'react';


export default function Player({list, selectedSong, setSelectedSong, color}) {
  const playerRef = React.useRef();
  const timeoutId = setTimeout(timeoutFunc, 500);
  const [time, setTime] = React.useState("0");
  const [playing, setPlaying] = React.useState(false);
const dark = true;

  function timeoutFunc() {
    setTime(playerRef.current.currentTime);
    if (playerRef.current.currentTime === playerRef.current.duration) {
      if (selectedSong === list.length-1) {
        setSelectedSong(0);
      } else {
        setSelectedSong(selectedSong+1);
      }
    }
  }
  
  React.useEffect(async () => {
    playerRef.current.volume = 0.50;
    return () => {
      clearTimeout(timeoutId)
    };
  }, [playing]);

  React.useEffect(() => {
    console.log(playerRef.current)
    playClicked();
  }, [selectedSong]);

  function playClicked() {
    setPlaying(true);
    playerRef.current.play();
  }

  function pauseClicked() {
    setPlaying(false);
    playerRef.current.pause();
  }

  function prevClicked() {
    if (selectedSong === 0) {
      setSelectedSong(list.length-1);
    } else {
      setSelectedSong(selectedSong-1);
    }
  }

  function nextClicked() {
    if (selectedSong === list.length-1) {
      setSelectedSong(0);
    } else {
      setSelectedSong(selectedSong+1);
    }
  }

  function PlayIcon() {
    return (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.25 18.75L42.75 30L23.25 41.25V18.75Z" fill={color}/>
        <circle cx="30" cy="30" r="29.5" stroke={color}/>
      </svg>
    );
  }
  
  function PauseIcon() {
    return(
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 16H26V44H20V16Z" fill={color}/>
        <path d="M34 16H40V44H34V16Z" fill={color}/>
        <circle cx="30" cy="30" r="29.5" stroke={color}/>
      </svg>
    );
  }

  function PrevIcon() {
    return (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M39 18.75L19.5 30L39 41.25V18.75Z" fill={color}/>
        <line y1="-1" x2="24" y2="-1" transform="matrix(0 1 1 0 19.25 18)" stroke={color} strokeWidth="2"/>
      </svg>
    );
  }

  function NextIcon() {
    return (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 18.75L40.5 30L21 41.25V18.75Z" fill={color}/>
        <line x1="41.75" y1="18" x2="41.75" y2="42" stroke={color} strokeWidth="2"/>
      </svg>
    );
  }


  return (
    <div id="musicPlayer">
      <p id="musicPlayerSongName">{list[selectedSong].metadata.title}</p>
      <audio 
        style={{ display: "block" }} 
        src={`https://daorecords.io:8443/fetch?cid=${JSON.parse(list[selectedSong].metadata.extra).music_cid}`} 
        ref={playerRef} 
      />
      <div id="musicPlayerButtons">
        <button className="musicControlsButton" onClick={prevClicked}><PrevIcon /></button>
        {playing? 
          <button className="musicControlsButton" onClick={pauseClicked}><PauseIcon /></button>
        : 
          <button className="musicControlsButton" onClick={playClicked}><PlayIcon /></button>
        }
        <button className="musicControlsButton" onClick={nextClicked}><NextIcon /></button>
      </div>
      {playerRef.current && 
        <div>
          <input 
            className={dark? "musicControlsSlider" :  "musicControlsSlider musicControlsSliderWhite"}
            type={"range"}
            min={"0"}
            max={playerRef.current.duration}
            value={time}
            onChange={(e) => {
              playerRef.current.currentTime = e.target.value;
              setTime(playerRef.current.currentTime);
            }}
          />
        </div>
      }
    </div>
  )
}