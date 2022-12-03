import React from 'react';
import ThePicture from '../SubComponents/ThePicture';
import InfoBox from '../SubComponents/InfoBox';
import Buy from '../SubComponents/Buy';
import PlayerControls from '../SubComponents/PlayerControls';
import Title from '../SubComponents/Title';


/** 
 *  Grid for Single Typed Drop
 *  Does not have SongMenu, because it's just one single song.
 */
export default function SingleGrid({tokenId, metadata, newAction, playing, setPlay, audioRef}) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const overflow = ((screenHeight < 718) && (screenWidth > 1200)) ? ({ overflowY: "scroll" }) : null;
  const mobile = (screenWidth < 1200);

  return (
    <article id="landingGrid">
      {mobile && <Title 
        title={metadata.title} 
        mobile={mobile}
      />}

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
