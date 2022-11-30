import React from 'react';
import ThePicture from './ThePicture';
import InfoBox from './InfoBox';
import Buy from './Buy';
import PlayerControls from './PlayerControls';


/** 
 *  Grid for Single Typed Drop
 *  Does not have SongMenu, because it's just one single song.
 */
export default function SingleGrid({tokenId, metadata, newAction, playing, setPlay, audioRef}) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const overflow = ((screenHeight < 718) && (screenWidth > 1200)) ? ({ overflowY: "scroll" }) : null;

  return (
    <article id="landingGrid">
      <ThePicture 
        imageCID={metadata.media} 
        playing={playing} 
        setPlay={setPlay} 
      />

      <InfoBox
        tokenId={tokenId}
        metadata={metadata}
        newAction={newAction}
      />

      <PlayerControls 
        playing={playing} 
        setPlay={setPlay} 
        audioRef={audioRef} 
      />
      
      <section id="actionsBox">
        <Buy tokenId={tokenId} price={JSON.parse(metadata.extra).original_price} newAction={newAction} />
      </section>
    </article>
  )
}
