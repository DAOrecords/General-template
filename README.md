General templates for NFT dropes. This repository was forked from SoundSplash.

There are 3 types of template:
 * Single
 * Album
 * Mixtape

## Single
Only a single song, without SongMenu

## Album
There is a SongMenu, name of the album is visible in that place where the name of the song used to be visible. You can see the current song on the right.

## Mixtape
Very similar to album. There is a SongMenu. You can see the currently playing song on the right, but in the SongTitle field as well. Mixtape name is shown in top of the SongMenu instead.

The drop requires some developer-attention to complete, but it's not so much.  
Things that need to be done:
 - `/` Main root needs to be modified in `App.js` to redirect to the component we want to be home page.
 - We need to copy-paste the <Route /> components as much times as we want, we can create one single route for an album, we can create multiple routes for singles, etc.
 - We need to give in @mixtapeName, @albumName, or @index to the component. It is explained in the code.
 - In `utils.js`, `mode` has to be set correctly!
 - `projectConfig.json` should be edited (only `contractName` is important)
 - In `Footer.js`, the logos should be imported, the social links should be updated with the correct values.

When we will automate the whole process, most likely the above mentioned values will come from the database, or a smart contract. It should be easy to automate the process with these components.
