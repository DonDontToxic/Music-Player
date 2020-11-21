/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({setSongs, songs, setcurrentSong, audioRef, isPlaying}) => {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => 
                    (<LibrarySong 
                        songs={songs}
                        song={song} 
                        isPlaying={isPlaying}
                        audioRef={audioRef}
                        setSongs={setSongs}
                        setcurrentSong={setcurrentSong}
                        id={song.id}
                        key={song.id}
                        />
                ))}
            </div>
        </div>

    )
}


export default Library;