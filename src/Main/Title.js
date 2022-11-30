import React from 'react';


export default function Title({title, albumName = "__NOT_AN_ALBUM__"}) {
  if (albumName === "__NOT_AN_ALBUM__") {
    return (
      <p id="title">{title}</p>
    );
  } else {
    return (
      <p id="title">{albumName}</p>
    );
  }
}
