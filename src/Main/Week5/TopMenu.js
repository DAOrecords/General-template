import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../../assets/whiteHamburger.svg'
import 'regenerator-runtime/runtime';
import Wallet from './Wallet';
import logo from '../../assets/SoundSplashLogo.svg'


/** Top Menu for Week5 */
export default function TopMenu({setShowWallet, showWallet}) {
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
        <nav id="splash-1-nav" className="splash-2-nav">
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
              <Link to={'/my-nfts'} className="hamburgerElement">MY NFTS</Link>
              {/** List of the drops, we will append this as we go */}
              <Link to={'/weekone'} className="controlsButton hamburgerElement">Week One</Link>
              <Link to={'/weektwo'} className="controlsButton hamburgerElement">Week Two</Link>
              <Link to={'/weekthree'} className="controlsButton hamburgerElement">Week Three</Link>
              <Link to={'/weekfour'} className="controlsButton hamburgerElement">Week Four</Link>
              <Link to={'/weeksix'} className="controlsButton hamburgerElement">Week Six</Link>
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
        <Link to={''} className="controlsButton menuButton InterMenu F2White"></Link>
        <Link to={''} className="controlsButton menuButton InterMenu F2White"></Link>
        <button onClick={splashDropdownClicked} className="controlsButton menuButton InterMenu F2White">SPLASH DROPS</button>
        <Link to={'/my-nfts'} className="controlsButton menuButton InterMenu F2White">MY NFTS</Link>

        {splashMenuOpen && (
          <div id="dropdownContainer" className="dropdownContainerSplashTwo">
            {/** List of the drops, we will append this as we go */}
            <Link to={'/weekone'} className="controlsButton menuButton">Week One</Link>
            <Link to={'/weektwo'} className="controlsButton menuButton">Week Two</Link>
            <Link to={'/weekthree'} className="controlsButton menuButton">Week Three</Link>
            <Link to={'/weekfour'} className="controlsButton menuButton">Week Four</Link>
            <Link to={'/weeksix'} className="controlsButton menuButton">Week Six</Link>
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