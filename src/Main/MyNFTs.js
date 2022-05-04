import React, { useEffect, useState } from 'react';
import { getListForAccount, verify_sha256 } from '../utils';
import NftCard from './NftCard';
import TransferModal from './TransferModal';


export default function MyNFTs({newAction}) {
  const [list, setList] = useState([]);
  const [images, setImages] = useState(Array(100).fill(null));
  const [showTransfer, setShowTransfer] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(async () => {
    const urlParams = window.location.search;
    if (urlParams.includes('errorCode')) {
      newAction({
        errorMsg: "There was an error while processing the transaction!", errorMsgDesc: "errorCode",
      }); 
    } else if (urlParams.includes('transactionHashes')) {
      newAction({
        successMsg: "NFT transfered!", successMsgDesc: "You successfully transfered the NFT!",
      });
    }

    const nftList = await getListForAccount();
    console.log("nftList", nftList)
    setList(nftList);
    loadImages(nftList);
  }, []);

  function loadImages(nftList) {
    for (let i = 0; i < nftList.length; i++) {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "https://ipfs.io/ipfs/" + nftList[i].metadata.media);
      xhr.responseType = "blob";
      xhr.onload = function() {
        let blob = xhr.response;
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = async function(e) {
          const hash_correct = await verify_sha256(blob, nftList[i].metadata.media_hash);
          if (hash_correct) setImages((state) => {
            state[i] = e.target.result;
            return [...state];
          });
          else newAction({
            errorMsg: "There was an error while loading the image!", errorMsgDesc: "The image hash is incorrect.",
          });
        }
      }
      xhr.send();
    }
  }

  function openTransfer(index) {
    setSelected(index);
    setShowTransfer(true);
  }


  return (
    <main>
        <h1>MY NFTs</h1>
        <ul id="listContainer">
          {list && list.map((item, i) => (
            <li key={"nftCard-" + i}>
              <NftCard 
                image={images[i]} 
                artistList={artistLists[0]}
                openTransfer={openTransfer} 
                i={i} metadata={item.metadata} 
              />
            </li>
          ))}
        </ul>
      

      {showTransfer && 
        <TransferModal 
          token={list[selected]} 
          artistList={artistLists[0]}
          newAction={newAction} 
          setOpenModal={setShowTransfer}
        />
      }
    </main>
  );
}

const artistLists = [
  [
    {
      name: "masia one ",
      twitter: "https://twitter.com/masiaone",
      insta: "https://www.instagram.com/masiaone/",
      youtube: "testYT"
    },
    {
      name: "noyz134",
      twitter: "https://twitter.com/chew_wui",
      insta: "http://www.instagram.com/noyz134",
      youtube: "otherYT"
    },
    {
      name: "janine annice",
      twitter: "https://twitter.com/JanineAnnice",
      insta: "http://www.instagram.com/janineannice",
      youtube: "otherYT"
    },
    {
      name: "alx",
      twitter: "https://twitter.com/alxtalhinhas",
      insta: "http://www.instagram.com/alxtalhinhas",
      youtube: "otherYT"
    },
    {
      name: "jcb",
      twitter: "https://twitter.com/JCBBeats",
      insta: "http://www.instagram.com/JustinCBurkholder",
      youtube: "otherYT"
    },
  ]
];