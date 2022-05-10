import React from 'react'
import FooterSplash1 from './Footer'
import ThePicture from './ThePicture'
import InfoBox from './InfoBox';

export default function SplashLandingGrid({tokenId, metadata, image, newAction}) {
  const screenWidth = window.screen.availWidth;

  return (
    <div id="splashLandingGrid">
      <ThePicture image={image} />
      <InfoBox
        tokenId={tokenId}
        metadata={metadata}
        image={image}
        newAction={newAction}
      />
      {(screenWidth <= 1200) && <FooterSplash1 />}
    </div>
  )
}
