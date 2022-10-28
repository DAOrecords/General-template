import React from 'react';
import DaoLogo from '../assets/DaoLogoSplash3.svg';
import RealityChain from '../assets/RealityChainSplash2.svg';
import CryptoVoxels from '../assets/CryptoVoxelsSplash2.svg';
import logo from '../assets/beatLogo.png';
import NearHub from '../assets/near_hub_logo.svg';


/** Footer for Week12 */
export default function Footer() {
  return (
    <>
      <footer>
        <ul>
          <li>
            <a href={'https://www.daorecords.org/'}>
              <img src={DaoLogo} alt={'DAOrecords'} />
            </a>
          </li>
          <li>
            <a href={'https://nearhub.club/G99xQHP/beatdao-mansion'} >
              <img src={NearHub} alt={'NearHub'} />
            </a>
          </li>
        </ul>
      </footer>
    
      <img src={logo} alt='' id="beatLogo"></img>
    </>
  )
}
