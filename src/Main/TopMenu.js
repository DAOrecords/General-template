import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../assets/hamburger_white.svg'
import 'regenerator-runtime/runtime';
import Wallet from './Wallet';
import logo from '../assets/DaoLogo.svg';


/** Top Menu for new */
export default function TopMenuSplash1({setShowWallet, showWallet}) {
  const screenWidth = window.innerWidth;
  const [menuOpen, setMenuOpen] = useState(false);

  function hamburgerClicked() {
    setMenuOpen(!menuOpen);
    setShowWallet(false);
  }


  if (screenWidth < 1200) {                               // This is the hamburger view
    return (
      <>
        <nav id="mainav">
          <button onClick={hamburgerClicked} className="hamburgerIcon">
            <img src={hamburger} alt='Menu'></img>
          </button>
          <Wallet 
            setShowWallet={setShowWallet}
            showWallet={showWallet}
            setMenuOpen={setMenuOpen}
          />
        </nav>
      </>
    )
  } else {                                                // This is the normal view
    return (
      <nav id="mainNav">
        <Link to={'/'} className='mainLogo'>
          <img src={logo} alt={'SoundSplash'} />
        </Link>
        <Link to={'/my-nfts'} className="controlsButton menuButton">My NFTs</Link>

        <Wallet 
          setShowWallet={setShowWallet}
          showWallet={showWallet}
          setMenuOpen={setMenuOpen}
        />
      </nav>
    )
  }
  
}