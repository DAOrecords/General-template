import React from 'react';
import ThePicture from './ThePicture';
import iconTest from '../assets/pause.svg';
import InfoBox from './InfoBox';
import Buy from './Buy';
import AudioPlayerNftStorage from '../Common/AudioPlayerNftStorage';
import PlayerControls from './PlayerControls';


export default function SplashLandingGrid({tokenId, metadata, newAction, playing, setPlay, audioRef}) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const overflow = ((screenHeight < 718) && (screenWidth > 1200)) ? ({ overflowY: "scroll" }) : null;

  return (
    <article id="landingGrid">
      <ThePicture imageCID={metadata.media} playing={playing} setPlay={setPlay} />

      <InfoBox
        tokenId={tokenId}
        metadata={metadata}
        newAction={newAction}
      />

      {false && <section id="songMenuBox">
        {"Songlist"}
      </section>}

      <PlayerControls playing={playing} setPlay={setPlay} audioRef={audioRef} />
      
      <section id="actionsBox">
        <Buy tokenId={tokenId} price={"0"} newAction={newAction} />
      </section>
    </article>
  )
}

/*


<div id="splashLandingGrid5" style={overflow}>
  <SongName title={""} image={titleImage} />
  {(screenWidth <= 1200) && <Footer />}
</div>
*/