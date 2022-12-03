import React from 'react';


export default function Title({title, albumName = "__NOT_AN_ALBUM__", mobile}) {
  if (albumName === "__NOT_AN_ALBUM__") {
    return (
      <p id="title" className={mobile ? "mobileTitle" : null}>{title}</p>
    );
  } else {
    return (
      <p id="title" className={mobile ? "mobileTitle" : null}>{albumName}</p>
    );
  }
}
