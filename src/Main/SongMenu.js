import React from 'react';


export default function SongMenu({mixtapeName, songList, selected, changeSong}) {
  return (
    <section id="songMenuBox">
      {mixtapeName && <h2 id="songMenuTitle">{mixtapeName}</h2>}
      <ul id="songMenuList">
        {songList.map((songName, index) => (
          <li 
            key={index}
            onClick={() => changeSong(index)}
            className={(selected === index) ? "songMenuElement songMenuElementSelected" : "songMenuElement"} 
          >
            {songName}
          </li>
        ))}
      </ul>
    </section>
  )
}