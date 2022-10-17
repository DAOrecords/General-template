import React from 'react'


export default function  Week2ArtistList({list, fontSettings}) {
  const style = {

  }

  return (
    <ul id="splashArtistList" className="splashInfoElement" style={style}>
      {list.map((artist, index) => (
        <li className="splashArtistListElement" key={"artist-" + index}>
          <p className="splashArtistListElementFirst splashArtistListElementFirstWeek4">{artist.name}</p>
          <a className="splashArtistListElementIcon" href={artist.twitter}><Twitter /></a>
          <a className="splashArtistListElementIcon" href={artist.insta}><Insta /></a>
          <a className="splashArtistListElementIcon" href={artist.website}><Website /></a>
        </li>
      ))}
    </ul>
  )
}


function Twitter() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.057 7.18078C21.0663 7.39198 21.0663 7.59358 21.0663 7.80478C21.0755 14.208 16.3711 21.6 7.76781 21.6C5.23036 21.6 2.73921 20.8416 0.599976 19.4208C0.970406 19.4688 1.34084 19.488 1.71127 19.488C3.81346 19.488 5.86009 18.7584 7.51777 17.4048C5.51744 17.3664 3.7579 16.0128 3.14669 14.0352C3.8505 14.1792 4.57284 14.1504 5.25814 13.9488C3.08186 13.5072 1.51679 11.52 1.50753 9.20639C1.50753 9.18719 1.50753 9.16799 1.50753 9.14879C2.15578 9.52319 2.88738 9.73439 3.62825 9.75359C1.58162 8.33278 0.942624 5.50077 2.18357 3.28317C4.56358 6.31678 8.06415 8.15038 11.824 8.35198C11.4443 6.67198 11.9629 4.90557 13.1761 3.71517C15.056 1.88156 18.0195 1.97756 19.7975 3.92637C20.844 3.71517 21.8534 3.31197 22.7702 2.74556C22.4183 3.86877 21.6867 4.81917 20.7144 5.42397C21.6404 5.30877 22.548 5.04957 23.4 4.66557C22.7702 5.64477 21.9738 6.48958 21.057 7.18078Z" fill="#F2F2F2"/>
    </svg>
  );
}

function Insta() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.71429C9.20641 1.71429 8.85669 1.72595 7.75955 1.77601C6.66446 1.82607 5.91635 2.00024 5.26218 2.25464C4.57647 2.51247 3.95452 2.91704 3.44024 3.44092C2.91719 3.95461 2.51237 4.57612 2.25395 5.26218C2.00092 5.91635 1.82607 6.66515 1.77601 7.76024C1.72664 8.85669 1.71429 9.20572 1.71429 12C1.71429 14.7943 1.72595 15.1433 1.77601 16.2405C1.82607 17.3355 2.00024 18.0837 2.25464 18.7378C2.51247 19.4235 2.91704 20.0455 3.44092 20.5598C3.95463 21.0828 4.57613 21.4876 5.26218 21.7461C5.91635 21.9998 6.66446 22.1739 7.75955 22.224C8.85669 22.2741 9.20641 22.2857 12 22.2857C14.7936 22.2857 15.1433 22.2741 16.2405 22.224C17.3355 22.1739 18.0837 21.9998 18.7378 21.7454C19.4235 21.4875 20.0455 21.083 20.5598 20.5591C21.0828 20.0454 21.4876 19.4239 21.7461 18.7378C21.9998 18.0837 22.1739 17.3355 22.224 16.2405C22.2741 15.1433 22.2857 14.7936 22.2857 12C22.2857 9.20641 22.2741 8.85669 22.224 7.75955C22.1739 6.66446 21.9998 5.91635 21.7454 5.26218C21.4871 4.57582 21.0823 3.95406 20.5591 3.44024C20.0454 2.91719 19.4239 2.51237 18.7378 2.25395C18.0837 2.00092 17.3349 1.82607 16.2398 1.77601C15.1433 1.72664 14.7943 1.71429 12 1.71429ZM12 3.56778C14.7463 3.56778 15.072 3.57807 16.1568 3.62744C17.1593 3.67338 17.7038 3.84001 18.0665 3.98195C18.5465 4.16778 18.8894 4.39132 19.2494 4.75064C19.6094 5.11064 19.8322 5.45349 20.0181 5.93349C20.1593 6.29624 20.3266 6.84069 20.3726 7.84321C20.4219 8.92801 20.4322 9.25372 20.4322 12C20.4322 14.7463 20.4219 15.072 20.3726 16.1568C20.3266 17.1593 20.16 17.7038 20.0181 18.0665C19.8534 18.5133 19.5908 18.9175 19.2494 19.2494C18.9175 19.5909 18.5133 19.8535 18.0665 20.0181C17.7038 20.1593 17.1593 20.3266 16.1568 20.3726C15.072 20.4219 14.747 20.4322 12 20.4322C9.25304 20.4322 8.92801 20.4219 7.84321 20.3726C6.84069 20.3266 6.29624 20.16 5.93349 20.0181C5.48672 19.8534 5.08253 19.5908 4.75064 19.2494C4.40927 18.9175 4.14661 18.5133 3.98195 18.0665C3.84069 17.7038 3.67338 17.1593 3.62744 16.1568C3.57807 15.072 3.56778 14.7463 3.56778 12C3.56778 9.25372 3.57807 8.92801 3.62744 7.84321C3.67338 6.84069 3.84001 6.29624 3.98195 5.93349C4.16778 5.45349 4.39132 5.11064 4.75064 4.75064C5.08248 4.40918 5.48669 4.14651 5.93349 3.98195C6.29624 3.84069 6.84069 3.67338 7.84321 3.62744C8.92801 3.57807 9.25372 3.56778 12 3.56778Z" fill="#F2F2F2"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 15.4321C11.5494 15.4321 11.1031 15.3433 10.6867 15.1708C10.2703 14.9983 9.89195 14.7455 9.57326 14.4269C9.25457 14.1082 9.00177 13.7298 8.8293 13.3134C8.65682 12.897 8.56805 12.4508 8.56805 12.0001C8.56805 11.5494 8.65682 11.1031 8.8293 10.6867C9.00177 10.2703 9.25457 9.89196 9.57326 9.57327C9.89195 9.25458 10.2703 9.00178 10.6867 8.82931C11.1031 8.65684 11.5494 8.56806 12.0001 8.56806C12.9103 8.56806 13.7832 8.92965 14.4268 9.57327C15.0705 10.2169 15.432 11.0898 15.432 12.0001C15.432 12.9103 15.0705 13.7832 14.4268 14.4269C13.7832 15.0705 12.9103 15.4321 12.0001 15.4321ZM12.0001 6.71321C10.5979 6.71321 9.25316 7.27021 8.26168 8.26169C7.2702 9.25317 6.7132 10.5979 6.7132 12.0001C6.7132 13.4022 7.2702 14.747 8.26168 15.7384C9.25316 16.7299 10.5979 17.2869 12.0001 17.2869C13.4022 17.2869 14.7469 16.7299 15.7384 15.7384C16.7299 14.747 17.2869 13.4022 17.2869 12.0001C17.2869 10.5979 16.7299 9.25317 15.7384 8.26169C14.7469 7.27021 13.4022 6.71321 12.0001 6.71321ZM18.825 6.61721C18.825 6.94865 18.6933 7.26652 18.4589 7.50089C18.2246 7.73526 17.9067 7.86692 17.5752 7.86692C17.2438 7.86692 16.9259 7.73526 16.6916 7.50089C16.4572 7.26652 16.3255 6.94865 16.3255 6.61721C16.3255 6.28576 16.4572 5.96789 16.6916 5.73353C16.9259 5.49916 17.2438 5.36749 17.5752 5.36749C17.9067 5.36749 18.2246 5.49916 18.4589 5.73353C18.6933 5.96789 18.825 6.28576 18.825 6.61721Z" fill="#F2F2F2"/>
    </svg>
  );
}

function YouTube() {
  return (
    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.7116 2.03377C13.5502 1.4341 13.0774 0.961283 12.4777 0.799834C11.3822 0.5 6.99997 0.5 6.99997 0.5C6.99997 0.5 2.61778 0.5 1.52223 0.788302C0.934098 0.949751 0.449751 1.4341 0.288302 2.03377C0 3.12931 0 5.40113 0 5.40113C0 5.40113 0 7.68448 0.288302 8.7685C0.449751 9.36817 0.922566 9.84098 1.52223 10.0024C2.62931 10.3023 6.99997 10.3023 6.99997 10.3023C6.99997 10.3023 11.3822 10.3023 12.4777 10.014C13.0774 9.85252 13.5502 9.3797 13.7116 8.78003C13.9999 7.68448 13.9999 5.41266 13.9999 5.41266C13.9999 5.41266 14.0115 3.12931 13.7116 2.03377Z" fill="#333333"/>
      <path d="M5.60461 7.50005L9.24875 5.40121L5.60461 3.30237V7.50005Z" fill="#333333"/>
    </svg>
  );
}

function Facebook() {
  return (
    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.89646 7.23782L7.24197 4.96274H5.08063V3.48701C5.08063 2.86444 5.382 2.25724 6.35004 2.25724H7.33329V0.320348C7.33329 0.320348 6.44136 0.166626 5.589 0.166626C3.80818 0.166626 2.64532 1.25651 2.64532 3.22876V4.96274H0.666626V7.23782H2.64532V12.738C3.04258 12.801 3.44897 12.8333 3.86297 12.8333C4.27698 12.8333 4.68337 12.801 5.08063 12.738V7.23782H6.89646Z" fill="#333333"/>
    </svg>
  );
}

function Telegram() {
  return (
    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.46508 5.10736C4.91035 3.60631 7.20774 2.61673 8.35724 2.13861C11.6393 0.773492 12.3213 0.536356 12.7658 0.528526C12.8636 0.526804 13.0822 0.551033 13.2238 0.665929C13.3433 0.762945 13.3762 0.894 13.392 0.985982C13.4077 1.07796 13.4273 1.2875 13.4117 1.45123C13.2339 3.31998 12.4643 7.85493 12.0728 9.94796C11.9071 10.8336 11.5809 11.1305 11.2651 11.1596C10.5788 11.2228 10.0576 10.706 9.3929 10.2703C8.35274 9.58848 7.76511 9.16403 6.75546 8.49868C5.58862 7.72975 6.34503 7.30714 7.01001 6.61647C7.18403 6.43572 10.2079 3.68525 10.2665 3.43574C10.2738 3.40454 10.2806 3.28822 10.2115 3.2268C10.1424 3.16538 10.0404 3.18638 9.96678 3.20309C9.86245 3.22676 8.20078 4.32507 4.98175 6.49799C4.51009 6.82187 4.08288 6.97968 3.70011 6.97141C3.27814 6.96229 2.46643 6.73282 1.86301 6.53667C1.12288 6.29608 0.534651 6.16889 0.585873 5.7603C0.612553 5.54748 0.905621 5.32984 1.46508 5.10736Z" fill="#333333"/>
    </svg>
  );
}

function Website() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5609 4.43884C18.4425 3.32022 16.6288 3.32022 15.5101 4.43884L9.97485 9.97458C8.85623 11.093 8.85623 12.9067 9.97485 14.0252C10.3849 14.4353 10.3849 15.1001 9.97485 15.51C9.56477 15.9202 8.89997 15.9202 8.4899 15.51C6.55126 13.5715 6.55126 10.4283 8.4899 8.48972L14.0256 2.95398C15.9643 1.01534 19.1073 1.01534 21.0459 2.95398C22.9847 4.89261 22.9847 8.03568 21.0459 9.97468L20.1234 10.8971C19.7133 11.3072 19.0485 11.3072 18.6385 10.8971C18.2285 10.4872 18.2285 9.82244 18.6385 9.41237L19.5611 8.48972C20.6796 7.37127 20.6796 5.5576 19.5611 4.43911L19.5609 4.43884ZM14.0252 14.0249C15.1438 12.9065 15.1438 11.0928 14.0252 9.97432C13.6151 9.56423 13.6151 8.89943 14.0252 8.48936C14.4353 8.07945 15.1001 8.07945 15.51 8.48936C17.4488 10.428 17.4488 13.5711 15.51 15.5096L9.97467 21.0453C8.03604 22.9842 4.89297 22.9842 2.95398 21.0453C1.01534 19.1069 1.01534 15.9636 2.95398 14.0251L3.87663 13.1026C4.28672 12.6925 4.95151 12.6925 5.36159 13.1026C5.7715 13.5125 5.7715 14.1773 5.36159 14.5874L4.43893 15.5099C3.32031 16.6285 3.32031 18.4422 4.43893 19.5607C5.55738 20.6791 7.37105 20.6791 8.48954 19.5607L14.0252 14.0249Z" fill="#F2F2F2"/>
    </svg>
  );
}