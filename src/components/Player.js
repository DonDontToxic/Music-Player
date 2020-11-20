import React, {useState, useRef} from "react";
// Add font awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

const Player = ({setIsPlaying, isPlaying, currentSong}) => {
    // Ref
    const audioRef = useRef(null);

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
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration:duration})
    }
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    // State
    const [songInfo, setSongInfo] = useState({
        currentTime: null,
        duration: null
    })
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
    }
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                    min={0} 
                    max={songInfo.duration} 
                    value={songInfo.currentTime} 
                    onChange={dragHandler}
                    type="range"/>
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay} />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
            <audio 
                onTimeUpdate={timeUpdateHandler} 
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef} 
                src={currentSong.audio}></audio>
        </div>
    ) 
}


export default Player;