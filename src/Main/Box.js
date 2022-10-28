import React from 'react';
import { utils } from 'near-api-js';


export default function Box({gen, price, fontSettings}) {
  const priceInNear = utils.format.formatNearAmount(price);

  function formatNumber(number, maxDecimal) {
    return Math.round(number * Math.pow(10,maxDecimal)) / Math.pow(10,maxDecimal)
  }

  React.useEffect(async () => {
    const nearPrice = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=NEARUSDT")
    .then((res) => res.json())
    .catch((err) => {
      console.error("Error while fetching NEAR price", err);
      return { price: 0 }
    });
    const dResult = nearPrice.price * priceInNear;
    setDollar(dResult);
  }, [])
  
  const labelStyle = {

  };
  const valueStyle = {

  }


  return (
    <div id="splashSmallInfoBox" className="splashInfoElement noSpaceTop">
      <div><p className="splashInfoElementFirst splashInfoElement" style={labelStyle}>Generation</p></div>
      <div className="splashSmallInfoBoxNearPrice noFlexBasis"><p className="week2SplashSmallInfoBoxElement" style={valueStyle}>#{gen}</p></div>
      <div className="splashInfoElementBreak"></div>
      <div><p className="splashInfoElement" style={labelStyle}>Price</p></div>
      <div className="splashSmallInfoBoxNearPrice noFlexBasis"><p className="week2SplashSmallInfoBoxElement" style={valueStyle}>{formatNumber(priceInNear,3)} NEAR</p></div>
      <div className="splashInfoElementBreak"></div>
    </div>
  )
}
