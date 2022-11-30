import React from 'react';


export default function ThePicture({imageCID}) {
  return (
    <section id="pictureBox">
      <img 
        id="picture" 
        alt="Picture loading..."
        src={`https://daorecords.io:8443/fetch?cid=${imageCID}`}
      >
      </img>
    </section>
  )
}

