import React, { useState, useRef } from "react";
// Import components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
// Import style
import "./styles/app.scss"
// Import Util
import data from "./data"

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
  const [libraryStatus, setLibraryStatus] = useState(false);
  // Func
  const timeUpdateHandler = (e) => {
      const current = e.target.currentTime;
      const duration = e.target.duration;
      setSongInfo({...songInfo, currentTime: current, duration:duration})
  }
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player 
        songs={songs}
        setSongs={setSongs}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        setIsPlaying={setIsPlaying} 
        isPlaying={isPlaying} 
        currentSong={currentSong}
        setcurrentSong={setcurrentSong}/>
        <Library 
          libraryStatus={libraryStatus}
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
 