/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const LibrarySong = ({song, songs, setcurrentSong, audioRef, isPlaying}) => {
    const songSelectHandler = () => {
        // const selectedSong = songs.filter((state) => state.id === song.id);
        // setcurrentSong(selectedSong[0]);
        setcurrentSong(song);
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play();
                });
            }
        }

    }
    return (
        <div className="library-song" onClick={songSelectHandler}>
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>

    )
}


export default LibrarySong;