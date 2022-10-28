import React from 'react'

export default function SongName({title, image}) {

  if (image) {
    return (
      <div id="splashTitle">
        <img src={image} alt={title} />
      </div>
    )
  } else {
    return (
      <div id="splashTitle" style={{}}>
        {title}
      </div>
    )
  }
}
