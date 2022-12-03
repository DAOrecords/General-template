import React from 'react';
import ThePicture from '../SubComponents/ThePicture';
import InfoBox from '../SubComponents/InfoBox';
import Buy from '../SubComponents/Buy';
import PlayerControls from '../SubComponents/PlayerControls';
import SongMenu from '../SubComponents/SongMenu';
import Title from '../SubComponents/Title';


/** 
 *  Grid for Album Typed Drop
 *  albumName is coming down from App.js
 *  This is almost the same as MixtapeGrid and SingleGrid, could be made into a single component easily.
 */
export default function AlbumGrid({albumName, tokenId, metadata, songList, selected, changeSong, newAction, playing, setPlay, audioRef}) {
  const mobile = (window.innerWidth < 1200);

  return (
    <article id="mixtapeGrid">
      {mobile && <Title
        title={metadata.title} 
        albumName={albumName}
        mobile={mobile}
      />}

      <ThePicture 
        imageCID={metadata.media} 
        playing={playing} 
        setPlay={setPlay} 
      />

      <InfoBox
        albumName={albumName}
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
        <Buy 
          tokenId={tokenId} 
          price={JSON.parse(metadata.extra).original_price} 
          newAction={newAction} 
        />
      </section>
    </article>
  )
}
