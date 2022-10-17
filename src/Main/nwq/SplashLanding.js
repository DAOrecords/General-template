import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getBuyableTokens, verify_sha256 } from '../../utils';
import 'regenerator-runtime/runtime';
import LineVisualizer from './Equalizer';
import SplashLandingGrid from './SplashLandingGrid';
import Footer from './Footer';
import TopMenu from './TopMenu';
import { useNavigate } from 'react-router-dom';


export default function SplashLanding({index, newAction, openGuestBook, setGuestBook, setShowWallet, showWallet, titleImage}) {
  const screenWidth = window.innerWidth;
  const [nftList, setNftList] = React.useState([]);  
  const [play, setPlay] = React.useState(false);
  let navigate = useNavigate();

  React.useEffect(async () => {    
    const urlParams = window.location.search;
    const urlObj = new URLSearchParams(document.location.search);
    window.history.pushState({}, document.title, "/" + "");
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

  if (nftList.length === 0) return <p>Loading...</p>


  return (
    <>
      {openGuestBook && ( <GuestBook openModal={openGuestBook} newAction={newAction} setOpenModal={setGuestBook} /> )}
      <ToastContainer position="bottom-right" autoClose={5000} />
      <div id='beatDAObackground'>
        <TopMenu setShowWallet={setShowWallet} showWallet={showWallet} />

        <main>
          <LineVisualizer musicCID={JSON.parse(nftList[index].metadata.extra).music_cid} play={play} />

          <SplashLandingGrid
            tokenId={nftList[index].token_id}
            metadata={nftList[index].metadata}
            newAction={newAction}
            playing={play}
            setPlay={setPlay}
            titleImage={titleImage}
          />
        </main>

        {(screenWidth > 1200)&& <Footer />}
      </div>
    </>
  )
}