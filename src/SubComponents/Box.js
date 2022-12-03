import React from 'react';
import { utils } from 'near-api-js';
import nearLogo from '../assets/near_black.svg';


export default function Box({gen, price}) {
  const priceInNear = utils.format.formatNearAmount(price);

  function formatNumber(number, maxDecimal) {
    return Math.round(number * Math.pow(10,maxDecimal)) / Math.pow(10,maxDecimal)
  }


  return (
    <div id="smallInfoBox">
      <div>
        <p className="smallInfoElement">Generation</p>
      </div>
      <div className="smallInfoBoxValue">
        <p >#{gen}</p>
      </div>
      
      <div className="detailsBoxPlaceholder"></div>

      <div>
        <p className="smallInfoElement">Price</p>
      </div>
      <div className="smallInfoBoxValue">
        <p>{formatNumber(priceInNear,3)}</p> 
      </div>  
      <img width={"32px"} src={nearLogo} alt={'N'}></img>
      
      
    </div>
  )
}
