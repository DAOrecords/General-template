import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../../assets/hamburger_white.svg'
import 'regenerator-runtime/runtime';
import Wallet from './Wallet';
import logo from '../../assets/beatSplashDao.png';


/** Top Menu for new */
export default function TopMenuSplash1({setShowWallet, showWallet}) {
  const screenWidth = window.innerWidth;
  const [menuOpen, setMenuOpen] = useState(false);
  const [splashMenuOpen, setSplashMenuOpen] = useState(false);

  function hamburgerClicked() {
    setMenuOpen(!menuOpen);
    setShowWallet(false);
  }

  function splashDropdownClicked() {
    setSplashMenuOpen(!splashMenuOpen);
    setShowWallet(false);
  }


  if (screenWidth < 1200) {                               // This is the hamburger view
    return (
      <>
        <nav id="splash-1-nav">
          <button onClick={hamburgerClicked} className="hamburgerIcon">
            <img src={hamburger} alt='Menu'></img>
          </button>
          <Wallet 
            setShowWallet={setShowWallet}
            showWallet={showWallet}
            setMenuOpen={setMenuOpen}
            setSplashMenuOpen={setSplashMenuOpen}
          />
        </nav>

        {menuOpen && (
          <div id="dropdownContainer" className="mobileDropdownContainer">
              <Link to={'/my-nfts'} className="hamburgerElement">My NFTs</Link>
              {/** List of the drops, we will append this as we go */}
              <Link to={'/FunkDaMentals'} onClick={() => setMenuOpen(false)} className="controlsButton hamburgerElement">FunkDaMentals</Link>
              <Link to={'/4eVaH'} onClick={() => setMenuOpen(false)} className="controlsButton hamburgerElement">4eVaH</Link>
              <Link to={'/SteppaInnaDAO'} onClick={() => setMenuOpen(false)} className="controlsButton hamburgerElement">Steppa Inna DAO</Link>
              <Link to={'/MusicforGuzheng'} onClick={() => setMenuOpen(false)} className="controlsButton hamburgerElement">Music for Guzheng</Link>
          </div>
        )}
      </>
    )
  } else {                                                // This is the normal view
    return (
      <nav id="splash-1-nav">
        <div className='splashLogo'>
          <img src={logo} alt={'SoundSplash'} />
        </div>
        <Link to={''} className="controlsButton menuButton"></Link>
        <button onClick={splashDropdownClicked} className="controlsButton menuButton">Drops</button>
        <Link to={'/my-nfts'} className="controlsButton menuButton">My NFTs</Link>

        {splashMenuOpen && (
          <div id="popupWrapper" onClick={() => setSplashMenuOpen(false)}>
            <div id="dropdownContainer"  onClick={(e) => e.stopPropagation()}>
              {/** List of the drops, we will append this as we go */}
              <Link to={'/FunkDaMentals'} onClick={() => setSplashMenuOpen(false)} className="controlsButton menuButton">FunkDaMentals</Link>
              <Link to={'/4eVaH'} onClick={() => setSplashMenuOpen(false)} className="controlsButton menuButton">4eVaH</Link>
              <Link to={'/SteppaInnaDAO'} onClick={() => setSplashMenuOpen(false)} className="controlsButton menuButton">Steppa Inna DAO</Link>
              <Link to={'/MusicforGuzheng'} onClick={() => setSplashMenuOpen(false)} className="controlsButton menuButton">Music for Guzheng</Link>
            </div>
          </div>
        )}

        <Wallet 
          setShowWallet={setShowWallet}
          showWallet={showWallet}
          setMenuOpen={setMenuOpen}
          setSplashMenuOpen={setSplashMenuOpen}
        />
      </nav>
    )
  }
  
}