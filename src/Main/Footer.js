import React from 'react';
import DaoLogo from '../assets/DaoLogo.svg';
import RealityChain from '../assets/RealityChainLogo.svg';
import CryptoVoxels from '../assets/CryptoVoxelsLogo.svg';
import NearHub from '../assets/near_hub_logo.svg';


/** Footer for Main */
export default function Footer() {
  return (
    <footer id="mynftsFooter">
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
  )
}
