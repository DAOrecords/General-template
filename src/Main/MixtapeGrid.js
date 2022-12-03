import React from 'react';
import ThePicture from '../SubComponents/ThePicture';
import InfoBox from '../SubComponents/InfoBox';
import Buy from '../SubComponents/Buy';
import PlayerControls from '../SubComponents/PlayerControls';
import SongMenu from '../SubComponents/SongMenu';
import Title from '../SubComponents/Title';


/** 
 *  Grid for Mixtape Typed Drop
 *  This is almost the same as AlbumGrid and SingleGrid, could be made into a single component easily.
 *  SingleGrid does not have SongMenu section.
 */
export default function MixtapeGrid({mixtapeName, tokenId, metadata, songList, changeSong, selected, newAction, playing, setPlay, audioRef}) {
  const mobile = (window.innerWidth < 1200);

  return (
    <article id="mixtapeGrid">
      {mobile && <Title 
        title={metadata.title} 
        albumName={mixtapeName}
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
