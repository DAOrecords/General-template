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

  function PlayIcon() {
    return (
      <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" ule="evenodd" d="M23.25 18.75L42.75 30L23.25 41.25V18.75Z" fill="#FF0000"/>
      </svg>
    );
  }
  
  function PauseIcon() {
    return(
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" ule="evenodd" d="M10 4H5V20H10V4ZM19 4H14V20H19V4Z" fill="#FF0000"/>
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
      {playing? 
        <button className="musicControlsButton" onClick={pauseClicked}><PauseIcon /></button>
      : 
        <button className="musicControlsButton" onClick={playClicked}><PlayIcon /></button>
      }
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