import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../assets/hamburger.svg'
import 'regenerator-runtime/runtime';
import Wallet from '../SubComponents/MyNFTsWallet';
import logo from '../assets/DaoLogo.svg';
import smallLogo from '../assets/smallLogo.svg';
import xIcon from '../assets/xButton.svg';


/** Top Menu for new */
export default function TopMenuSplash1({setShowWallet, showWallet}) {
  const screenWidth = window.innerWidth;
  const [menuOpen, setMenuOpen] = useState(false);

  function hamburgerClicked() {
    setMenuOpen(!menuOpen);
    setShowWallet(false);
  }

  function xClicked() {
    setMenuOpen(false);
    setShowWallet(false);
  }


  if (screenWidth < 1200) {                               // This is the hamburger view
    return (
      <>
        <nav id="mainav">
          <Link to={'/'} className='mainLogo'>
            <img src={smallLogo} alt={'DAOrecords'} />
          </Link>
          <button onClick={hamburgerClicked} className="hamburgerIcon">
            <img src={menuOpen? xIcon : hamburger} alt='Menu'></img>
          </button>

          {menuOpen && (
            <section className="mobileDropdownContainer">
              <Link to={'/my-nfts'} className="controlsButton menuButton">My NFTs</Link>

              <Wallet 
                setShowWallet={setShowWallet}
                showWallet={false}
                mobile={true}
                setMenuOpen={setMenuOpen}
              />
            </section>
          )}
        </nav>
      </>
    )
  } else {                                                // This is the normal view
    return (
      <nav id="mainNav">
        <Link to={'/'} id="daorecordsHome" className='mainLogo'>
          {"Back"}
        </Link>
        <Link to={'/my-nfts'} className="controlsButton mainMenuButton">My NFTs</Link>

        <Wallet 
          setShowWallet={setShowWallet}
          showWallet={showWallet}
          setMenuOpen={setMenuOpen}
        />
      </nav>
    )
  }
  
}