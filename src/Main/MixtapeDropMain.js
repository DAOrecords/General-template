import React, { useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getBuyableTokens, verify_sha256 } from '../utils';
import 'regenerator-runtime/runtime';
import LineVisualizer from './Equalizer';
import MixtapeGrid from './MixtapeGrid';
import Footer from './Footer';
import TopMenu from './TopMenu';
import { useNavigate } from 'react-router-dom';


/** 
 *  The main entry pont for the MixtapeDrop
 *  This is the component that has to be used in App.js
 */
export default function MixtapeDrop({newAction, openGuestBook, setGuestBook, setShowWallet, showWallet, mixtapeName}) {
  const screenWidth = window.innerWidth;
  const [nftList, setNftList] = React.useState([]);  
  const [play, setPlay] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const audioRef = useRef(null);
  let navigate = useNavigate();

  React.useEffect(async () => {    
    const urlParams = window.location.search;
    const urlObj = new URLSearchParams(document.location.search);
    //window.history.pushState({}, document.title, "/" + "");
    if (urlParams.includes('errorCode')) {
      newAction({
        errorMsg: "There was an error while processing the transaction!", errorMsgDesc: urlObj.get('errorCode'),
      }); 
    } else if (urlParams.includes('transactionHashes')) {
      
      console.log("urlObj.get('contract'): ", urlObj.get('contract'))
      await fetch(`https://daorecords.io:8443/update/nfts_for_owner?owner=${window.accountId}&contract=${urlObj.get('contract')}`)
        .then((res) => res.json())
        .then((response) => {
          if (response.success) console.log("List of NFTs for user updated (server side)");
          else console.error("Error while updating entries for user: ", response.error);
        })
        .catch((err) => console.error(`Error while updating the list of NFTs for owner ${window.accountId}!`, err));

      //navigate('/my-nfts');
      newAction({
        successMsg: "Success!", successMsgDesc: "You bought a new NFT!",
      });
    }

    const buyable = await getBuyableTokens();
    const orderedBuyable = buyable.sort(function(a, b) {
      const firstNum = a.token_id.slice(10, a.token_id.lastIndexOf("-"));
      const secondNum = b.token_id.slice(10, b.token_id.lastIndexOf("-"));
      return firstNum - secondNum;
    })
  
    setNftList(orderedBuyable);
  }, [])

  React.useEffect(() => {
    if (!audioRef || !audioRef.current) return;
    audioRef.current.play();
  }, [selected]);

  if (nftList.length === 0) return <p>Loading...</p>

  function changeSong(index) {
    setSelected(index);
    setPlay(true);
  }

  
  return (
    <>
      {openGuestBook && ( <GuestBook openModal={openGuestBook} newAction={newAction} setOpenModal={setGuestBook} /> )}
      <ToastContainer position="bottom-right" autoClose={5000} />
      <div id='beatDAObackground'>
        <TopMenu setShowWallet={setShowWallet} showWallet={showWallet} />

        <main>
          <audio ref={audioRef} src={`https://daorecords.io:8443/fetch?cid=${JSON.parse(nftList[selected].metadata.extra).music_cid}`} />

          <MixtapeGrid
            mixtapeName={mixtapeName}
            tokenId={nftList[selected].token_id}
            metadata={nftList[selected].metadata}
            songList={nftList.map((nftEntry) => nftEntry.metadata.title)}
            changeSong={changeSong}
            selected={selected}
            newAction={newAction}
            playing={play}
            setPlay={setPlay}
            audioRef={audioRef}
          />
          <LineVisualizer play={play} audioRef={audioRef} />
        </main>

        {(screenWidth > 1200)&& <Footer socialsEnabled={true} />}
      </div>
    </>
  )
}