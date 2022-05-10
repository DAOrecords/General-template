import React from 'react';
import AudioPlayerNftStorage from '../Common/AudioPlayerNftStorage';
import ArtistList from './ArtistList';
import Week2Box from './Week2Box';
import Week2Desc from './Week2Desc';
import SongName from './SongName';
import titleImage from '../assets/splash2_title.svg';
import Week2ArtistList from './Week2ArtistList';


export default function Week2InfoBox({tokenId, metadata, newAction}) {
  const screenWidth = window.screen.availWidth;
  const extra = JSON.parse(metadata.extra);

  const fontSettings = {
    family: 'Inter',
    secondFamily: 'Inter',
    size: '14px',
    color: "#000000",
    buttonSize: '32px',
    normalSize: '14px'
  }

  const aList = [
    {
      name: "DEDEUKWU",
      twitter: "https://twitter.com/_dedeukwu/status/1493308920676466697?s=21&t=xd4BJufPNKs2CxsiOizdew",
      insta: "https://www.instagram.com/p/CbLxPYbIohY/?utm_medium=copy_link",
      youtube: "https://youtu.be/Sk6oNlDtGec"
    },
  ]

  const preludeMusicNftStorageLink = "https://bafybeif55rfqftq6jkpuabvxuj2zm555zb5dpr6z4ha4m6dpfxodu5lobi.ipfs.nftstorage.link/";

  return (
    <div>
      <SongName title={"Put It on Me"} image={titleImage} fontSettings={fontSettings} />
      <div id="splashInfoFlex" className="Week2splashInfoFlex">
        {(screenWidth < 1200) && (
          <div className="previewBoxItem">
            <AudioPlayerNftStorage nftStorageLink={preludeMusicNftStorageLink} color={"#F2F2F2"} dark={false} />
          </div>
        )}
        <div id="Week2splashArtistDescBox">
          <Week2ArtistList fontSettings={fontSettings} list={aList} />
          <Week2Desc desc={metadata.description} fontSettings={fontSettings} />
        </div>
        <Week2Box tokenId={tokenId} gen={extra.generation} price={extra.original_price} fontSettings={fontSettings} newAction={newAction} />
      </div>
    </div>
  )
}

