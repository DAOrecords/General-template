import React, { useEffect, useState } from 'react';
import { utils } from 'near-api-js';
import nearLogo from '../assets/ic_near.svg';
import placeholder from '../assets/DaoLogo.svg';
import playIcon from '../assets/play.svg';
import { isTestnet, stake_token, getStakedNFTRewards } from '../utils';


export default function NftCard({playClicked, artistList, openTransfer, index, metadata, tokenId, contract, isStaked, stakedNFTId}) {
  const [rewardsEarned, setRewardsEarned] = useState(-1);
  const extra = JSON.parse(metadata.extra);
  const priceInNear = utils.format.formatNearAmount(extra.original_price);
  const lastDash = tokenId.lastIndexOf('-');
  const dashes = tokenId.match(/-/g);
  let rootID = tokenId.slice(0, lastDash);
  if (dashes.length === 2) rootID = tokenId;                      // Root NFT
  const [picture, setPicture] = useState(null);

  function formatNumber(number, maxDecimal) {
    return Math.round(number * Math.pow(10,maxDecimal)) / Math.pow(10,maxDecimal)
  }

  useEffect(async () => {
    const testnet = isTestnet();
    console.log("refreshing data..."); 
    await fetch("https://daorecords.io:8443/fill/nfts_by_owner?testnet=1");    

    console.log("fetch: ", `https://daorecords.io:8443/get/thumbnail?root_id=${rootID}&contract=${contract}&${testnet ? "testnet=1" : ""}`)
    await fetch(`https://daorecords.io:8443/get/thumbnail?root_id=${rootID}&contract=${contract}&${testnet ? "testnet=1" : ""}`)
      .then((res) => res.json())
      .then((json) => setPicture("data:image/webp;base64," + json.thumbnail))
      .catch((err) => console.error("Error while fetching base64 image ", err));
    
    if(isStaked){
      var rewards = await getStakedNFTRewards(stakedNFTId);
      setRewardsEarned(rewards);
    }
  }, [tokenId, contract]);

  async function stakeClicked(event) {
    event.stopPropagation();
    // window.alert("Stake clicked. This is not implemented yet.");
    var result = await stake_token(tokenId, contract);
    if(result){
      window.alert("Staked successfully");
    } else {
      window.alert("Staking failed");
    }
  }

  function sellClicked(event) {
    event.stopPropagation();
    window.alert("Sell clicked. This is not implemented yet.");
  }

  return (
    <>
      <button onClick={(e) => playClicked(index, e)} className="nftCard">
        <div className="nftCardImageContainer">
          <img src={picture} alt={'nft-image'}></img>
          <img src={playIcon} alt={'P'} className="nftCardPlay" onClick={(e) => playClicked(index, e)}></img>
        </div>
        <div className="nftCardInfo">
          <p className="nftCardInfoTitle">
            {metadata.title}
          </p>
          <ul className="nftCardArtistList">
            {false && artistList.map((artist, i) => (
              <li key={"artist-" + i} className="nftCardArtistListElement">
                <img src={placeholder} alt={''}></img>
                <p>@{artist.name}</p>
              </li>
            ))}
          </ul>
          <div className="nftCardInfoBox">
            <p className="nftCardGen">Gen #{extra.generation}</p>
            <p className="nftCardNearPrice">{formatNumber(priceInNear,3)}</p>
            <img src={nearLogo} alt={'N'}></img>
          </div>
          {!isStaked && <div className="nftCardButtons">
            <button onClick={(e) => stakeClicked(e)} className="nftCardSecondaryButton">Stake</button>
            { false && <button onClick={(e) => sellClicked(e)} className="nftCardPrimaryButton">Sell</button> }
          </div> }
          { isStaked && <div style={{color: "white"}}>
              Rewards Earned: {rewardsEarned} $SPLASH
          </div> }
        </div>
      </button>
    </>
  )
}
