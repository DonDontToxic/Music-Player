/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {playAudio} from "../util";

const LibrarySong = ({id, song, songs, setcurrentSong, setSongs, audioRef, isPlaying}) => {
    const songSelectHandler = () => {
        // const selectedSong = songs.filter((state) => state.id === song.id);
        // setcurrentSong(selectedSong[0]);
        setcurrentSong(song);
        // Add active state
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {...song, active:true}
            } else {
                return {...song, active: false}
            }
        })
        setSongs(newSongs);
        // check if the song is playing
        playAudio(isPlaying, audioRef);
    }
    return (
        <div className={`library-song ${song.active ? 'selected' : ""}`} onClick={songSelectHandler}>
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>

    )
}


export default LibrarySong;