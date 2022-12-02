import React, { useState, useEffect } from 'react';
import Box from './Box';
import Desc from './Desc';
import ArtistList from './ArtistList';
import Title from './Title';
    

export default function InfoBox({tokenId, metadata, albumName, newAction}) {
  const [artistList, setArtistList] = useState([]);
  const lastDash = tokenId.lastIndexOf('-');
  const dashes = tokenId.match(/-/g);
  let rootID = tokenId.slice(0, lastDash);
  if (dashes.length === 2) rootID = tokenId;                      // Root NFT
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const mobile = (screenWidth < 1200);
  const extra = JSON.parse(metadata.extra);
  
  let userAgentString = navigator.userAgent;
  let safariAgent = userAgentString.indexOf("Safari") > -1;
  if (userAgentString.indexOf("Chrome") > -1) safariAgent = false;                             // Some browsers are spoofing user agent by adding a string like
  if (userAgentString.indexOf("Firefox") > -1) safariAgent = false;                            // Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36
  console.log("Is Safari? ", safariAgent);


  useEffect(async () => {
    const contract = window.contract.contractId;
    console.log("fetch: ", `https://daorecords.io:8443/get/collaborators?root_id=${rootID}&contract=${contract}`)
    await fetch(`https://daorecords.io:8443/get/collaborators?root_id=${rootID}&contract=${contract}`)
      .then((res) => res.json())
      .then((json) => setArtistList(JSON.parse(JSON.parse(json.collab_list))))
      .catch((err) => console.error("Error while fetching artist list ", err));
  }, [rootID]);

  const fetchLink = `https://daorecords.io:8443/fetch?cid=` + extra.music_cid;                 // Fetch url for our server


  return (  
    <section id="detailsBox">
      {!mobile && <Title title={metadata.title} albumName={albumName} />}
      <div className="detailsBoxPlaceholder"></div>

      <div id="detailsBoxScrollContainer">
        <ArtistList list={artistList} />
        <Desc desc={metadata.description} />
      </div>

      <div className="detailsBoxPlaceholder"></div>
      <Box gen={extra.generation} price={extra.original_price} />
    </section>
  )
}

