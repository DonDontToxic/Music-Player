import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
// Import components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

// Import style
import "./styles/app.scss"
// Import Util
import data from "./util"

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setcurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Library songs = {songs}/>
      <Song currentSong={currentSong}/>
      <Player 
        setIsPlaying={setIsPlaying} 
        isPlaying={isPlaying} 
        currentSong={currentSong}/>
    </div>
  );
}

export default App;
 