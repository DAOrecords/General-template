import React, { useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getBuyableTokens, isTestnet, verify_sha256 } from '../utils';
import 'regenerator-runtime/runtime';
import LineVisualizer from '../SubComponents/Equalizer';
import SingleGrid from './SingleGrid';
import Footer from '../SubComponents/Footer';
import TopMenu from '../SubComponents/TopMenu';
import { useNavigate } from 'react-router-dom';


/** 
 *  The main entry pont for the SingleDrop
 *  This is the component that has to be used in App.js
 */
export default function SingleDrop({index, newAction, openGuestBook, setGuestBook, setShowWallet, showWallet}) {
  const screenWidth = window.innerWidth;
  const [nftList, setNftList] = React.useState([]);  
  const [play, setPlay] = React.useState(false);
  const audioRef = useRef(null);
  let navigate = useNavigate();

  React.useEffect(async () => {    
    const urlParams = window.location.search;
    const urlObj = new URLSearchParams(document.location.search);
    const testnet = isTestnet(); 
    if (urlParams.includes('errorCode')) {
      newAction({
        errorMsg: "There was an error while processing the transaction!", errorMsgDesc: urlObj.get('errorCode'),
      }); 
    } else if (urlParams.includes('transactionHashes')) {
      
      console.log("urlObj.get('contract'): ", urlObj.get('contract'))
      await fetch(`https://daorecords.io:8443/update/nfts_for_owner?owner=${window.accountId}&contract=${urlObj.get('contract')}&${testnet ? "testnet=1" : ""}`)
      .then((res) => res.json())
      .then((response) => {
        if (response.success) console.log("List of NFTs for user updated (server side)");
        else console.error("Error while updating entries for user: ", response.error);
      })
      .catch((err) => console.error(`Error while updating the list of NFTs for owner ${window.accountId}!`, err));
      
      window.history.pushState({}, document.title, "/" + "");
      navigate('/my-nfts');
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

  if (nftList.length === 0) return <p>Loading...</p>


  return (
    <>
      {openGuestBook && ( <GuestBook openModal={openGuestBook} newAction={newAction} setOpenModal={setGuestBook} /> )}
      <ToastContainer position="bottom-right" autoClose={5000} />
      <div id='beatDAObackground'>
        <TopMenu setShowWallet={setShowWallet} showWallet={showWallet} />

        <main>
          <audio ref={audioRef} src={`https://daorecords.io:8443/fetch?cid=${JSON.parse(nftList[index].metadata.extra).music_cid}`} />

          <SingleGrid
            tokenId={nftList[index].token_id}
            metadata={nftList[index].metadata}
            newAction={newAction}
            playing={play}
            setPlay={setPlay}
            audioRef={audioRef}
          />
          <LineVisualizer play={play} audioRef={audioRef} />
        </main>

        {(screenWidth > 1200)&& <Footer />}
      </div>
    </>
  )
}