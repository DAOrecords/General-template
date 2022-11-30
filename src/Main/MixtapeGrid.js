import React from 'react';
import ThePicture from './ThePicture';
import InfoBox from './InfoBox';
import Buy from './Buy';
import PlayerControls from './PlayerControls';
import SongMenu from './SongMenu';


/** 
 *  Grid for Mixtape Typed Drop
 *  This is almost the same as AlbumGrid and SingleGrid, could be made into a single component easily.
 *  SingleGrid does not have SongMenu section.
 */
export default function MixtapeGrid({tokenId, metadata, songList, changeSong, selected, newAction, playing, setPlay, audioRef}) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const overflow = ((screenHeight < 718) && (screenWidth > 1200)) ? ({ overflowY: "scroll" }) : null;

  return (
    <article id="mixtapeGrid">
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

      <SongMenu 
        songList={songList} 
        selected={selected} 
        changeSong={changeSong} 
      />

      <PlayerControls 
        playing={playing} 
        setPlay={setPlay} 
        isAlbum={true}
        listLength={songList.length}
        selectedSong={selected}
        changeSong={changeSong}
        audioRef={audioRef} 
      />
      
      <section id="actionsBox">
        <Buy tokenId={tokenId} price={JSON.parse(metadata.extra).original_price} newAction={newAction} />
      </section>
    </article>
  )
}
