import React, {useEffect} from "react";
import {playAudio} from "../util";
// Add font awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faPause, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

const Player = ({songs, setSongs, setIsPlaying, isPlaying, currentSong, setcurrentSong, audioRef, setSongInfo, songInfo}) => {
    // Use effect 
    useEffect(() => {
        const newSongs = songs.map((song) => {
            if (song.id === currentSong.id) {
                return {...song, active:true}
            } else {
                return {...song, active: false}
            }
        })
        setSongs(newSongs);
    }, [currentSong]); // Run the func every time the currentSong get updated
    // Event handler
    const playSongHandler = () => {
        //Play song
        if (!isPlaying) {        
            audioRef.current.play();
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.pause();
            setIsPlaying(!isPlaying)
        }
    }
    // Handler
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
    }
    const skipTrackHandler = (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === "skip-forward") {
            setcurrentSong(songs[(currentIndex + 1) % songs.length])
        } else {
            if (currentIndex === 0) {
                setcurrentSong(songs[songs.length - 1])
                playAudio(isPlaying, audioRef);
                return;
            }
            setcurrentSong(songs[(currentIndex - 1) % songs.length]);
        }
        playAudio(isPlaying, audioRef);
    }
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                    min={0} 
                    max={songInfo.duration || 0} 
                    value={songInfo.currentTime} 
                    onChange={dragHandler}
                    type="range"/>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon 
                    onClick={playSongHandler} 
                    className="play" 
                    size="2x" 
                    icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className="skip-forward" size="2x" icon={faAngleRight} />
            </div>

        </div>
    ) 
}


export default Player;