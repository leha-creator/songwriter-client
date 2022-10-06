import React, { useEffect, useState } from 'react';
import SongwriterAPI from "./utils/SongwriterAPI";
import {Song} from "./models/Song";

function App() {
  const [songTitle, setSongTitle] = useState('Undefined')

  useEffect(() => {
    SongwriterAPI.getSong(1, setSongTitle)
    // console.log(song)
    // setSongTitle(song.title);
  }, [])

  return (
    <div className="App">
      {songTitle}
    </div>
  );
}

export default App;
