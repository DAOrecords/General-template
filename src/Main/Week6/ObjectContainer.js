import React from 'react';
import logo from '../../assets/splash6_objects/YinYangLogo.png';


export default function ObjectContainer() {
  const logoPos = {
    position: "absolute",
    width: "6vw",
    bottom: "2%",
    right: "5%"
  }
  

  return (
    <>
      <img src={logo} style={logoPos} className="splashOneObject" />
    </>
  )
}
