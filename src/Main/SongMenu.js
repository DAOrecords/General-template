import React, { useState } from 'react';
import up from '../assets/arrow_up.svg';
import down from '../assets/arrow_down.svg';


export default function SongMenu({mixtapeName, songList, selected, changeSong}) {
  const mobile = (window.innerWidth < 1200);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function dropdownElementClicked(index) {
    changeSong(index);
    setDropdownOpen(false);
  }

  /** Mobile */
  if (mobile) return (
    <section id="songMenuBox">
      <button id="songMenuBoxDropdownButton" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <p>{songList[selected]}</p>
        <img src={dropdownOpen ? up : down} alt={dropdownOpen ? "^" : "ˇ"} />
      </button>

      {dropdownOpen && <ul id="songMenuList">
        {songList.map((songName, index) => (
          <li 
            key={index}
            onClick={() => dropdownElementClicked(index)}
            className={(selected === index) ? "songMenuElement songMenuElementSelected" : "songMenuElement"} 
          >
            {songName}  
          </li>
        ))}
      </ul>}
    </section>
  ); 

  /** Desktop */
  else return (
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