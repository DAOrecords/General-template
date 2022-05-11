import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../assets/hamburger.svg'
import 'regenerator-runtime/runtime';
import Week2Wallet from './Week2Wallet';
import logo from '../assets/SoundSplashLogo2.svg'


/** Top Menu for Main */
export default function TopMenuSplash2s({setShowWallet, showWallet}) {
  const screenWidth = window.screen.availWidth;
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
        <nav id="splash-1-nav" className="splash-2-nav">
          <button onClick={hamburgerClicked} className="hamburgerIcon">
            <img src={hamburger} alt='Menu'></img>
          </button>
          <Week2Wallet
            setShowWallet={setShowWallet}
            showWallet={showWallet}
            setMenuOpen={setMenuOpen}
          />
        </nav>

        {menuOpen && (
          <div id="dropdownContainer" className="mobileDropdownContainer">
              <Link to={'/my-nfts'} className="hamburgerElement">MY NFTS</Link>
              {/** List of the drops, we will append this as we go */}
              <Link to={'/weekone'} className="controlsButton hamburgerElement">Masia One</Link>
              <Link to={'/weektwo'} className="controlsButton hamburgerElement">Dolphins</Link>
          </div>
        )}
      </>
    )
  } else {                                                // This is the normal view
    return (
      <nav id="splash-1-nav" className="splash-2-nav">
        <div className='splashLogo'>
          <Link to={'/'}>
            <img src={logo} alt={'SoundSplash'} />
          </Link>
        </div>
        <Link to={''} className="controlsButton menuButton InterMenu"></Link>
        <Link to={''} className="controlsButton menuButton InterMenu"></Link>
        <button onClick={splashDropdownClicked} className="controlsButton menuButton InterMenu">SPLASH DROPS</button>
        <Link to={'/my-nfts'} className="controlsButton menuButton InterMenu">MY NFTS</Link>

        {splashMenuOpen && (
          <div id="dropdownContainer">
            {/** List of the drops, we will append this as we go */}
            <Link to={'/weekone'} className="controlsButton menuButton">Masia One</Link>
            <Link to={'/weektwo'} className="controlsButton menuButton">DEDEUKWU</Link>
          </div>
        )}

        <Week2Wallet
          setShowWallet={setShowWallet}
          showWallet={showWallet}
          setMenuOpen={setMenuOpen}
          setSplashMenuOpen={setSplashMenuOpen}
        />
      </nav>
    )
  }
  
}

/*

*/