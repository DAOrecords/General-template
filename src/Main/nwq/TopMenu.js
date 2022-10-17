import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../../assets/hamburger.svg'
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
              <Link to={'/weektwo'} className="controlsButton hamburgerElement">Week Two</Link>
              <Link to={'/weekthree'} className="controlsButton hamburgerElement">Week Three</Link>
              <Link to={'/weekfour'} className="controlsButton hamburgerElement">Week Four</Link>
              <Link to={'/weekfive'} className="controlsButton hamburgerElement">Week Five</Link>
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
        <Link to={'/my-nfts'} className="controlsButton menuButton">My NFTs</Link>

        {splashMenuOpen && (
          <div id="popupWrapper" onClick={() => setSplashMenuOpen(false)}>
            <div id="dropdownContainer"  onClick={(e) => e.stopPropagation()}>
              {/** List of the drops, we will append this as we go */}
              <Link to={'/weektwo'} className="controlsButton menuButton">Week Two</Link>
              <Link to={'/weekthree'} className="controlsButton menuButton">Week Three</Link>
              <Link to={'/weekfour'} className="controlsButton menuButton">Week Four</Link>
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