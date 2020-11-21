import React, { useState, useRef } from "react";
// Import components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

// Import style
import "./styles/app.scss"
// Import Util
import data from "./util"

function App() {
  // Ref
  const audioRef = useRef(null);
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setcurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    })
  const timeUpdateHandler = (e) => {
      const current = e.target.currentTime;
      const duration = e.target.duration;
      setSongInfo({...songInfo, currentTime: current, duration:duration})
  }
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player 
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        setIsPlaying={setIsPlaying} 
        isPlaying={isPlaying} 
        currentSong={currentSong}/>
        <Library 
          setSongs={setSongs}
          audioRef={audioRef} 
          songs = {songs} 
          isPlaying={isPlaying} 
          setcurrentSong={setcurrentSong}/>
        <audio 
        onTimeUpdate={timeUpdateHandler} 
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef} 
        src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
 