import React from 'react';
import { login, logout, getBalance } from '../utils';
import nearLogo from '../assets/near_black.svg';


export default function Wallet({setShowWallet, showWallet, setMenuOpen}) {
  const [balance, setBalance] = React.useState("NaN");
  const [dollar, setDollar] = React.useState("NaN");

  React.useEffect(async () => {
    const result = await getBalance();
    setBalance(result);
    const nearPrice = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=NEARUSDT")
      .then((res) => res.json())
      .catch((err) => {
        console.error("Error while fetching NEAR price", err);
        return { price: 0 }
      });
    const dResult = nearPrice.price * result;
    setDollar(dResult);
  }, [])

  function formatNumber(number, maxDecimal) {
    return Math.round(number * Math.pow(10,maxDecimal)) / Math.pow(10,maxDecimal)
  }

  function disconnectClicked() {
    logout();
    setShowWallet(false);
  }

  function badgeClicked() {
    setMenuOpen(false);
    //setSplashMenuOpen(false);
    setShowWallet(!showWallet);
  }

  if (!window.walletConnection.isSignedIn()) {
    return (
      <>
        <div className="controls mainControlsLast">
          <button onClick={login}  className="walletBadge">Connect to Wallet</button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="controls mainControlsLast">
          <button className="walletBadge"
            onClick={badgeClicked}
            onBlur={() => console.log("onblur does nothing")}
            tabIndex={"0"}
          >
            {window.accountId}
          </button>
        </div>

        {showWallet && (
          <div id="popupWrapper" onClick={() => setShowWallet(false)}>
            <div id="wallet" className="mainWalletContainer" onClick={(e) => e.stopPropagation()}>
              <div id="mainWalletBalanceFlex">
                <p>Balance</p>
                
                <p className="walletFlexPlaceholder"></p>
                <p>{formatNumber(balance, 1)}</p>
                <img src={nearLogo} alt={'N'} className="mainWalletBalanceFlexNear"></img>
              </div>            
              
              <div id="mainWalletButtonContainer">
                <button onClick={disconnectClicked} id="mainDisconnect">Disconnect</button>
              </div>
            </div>

          </div>
        )}
      </>
    )
  }
}
