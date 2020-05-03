import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { FaPlay, FaPause } from "react-icons/fa"
import formatTime from "../../lib/format-time"
import VolumeBars from "./volume-bars"

import "./player.css"

export default function Player({ audio }) {
  const audioRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = e => {
    const method = isPlaying ? "pause" : "play"
    audioRef.current[method]()
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="player">
      <div className="player__section player__section--left">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "pause" : "play"}
          type="button"
        >
          <p className="player__icon">{isPlaying ? <FaPause /> : <FaPlay />}</p>
          <p>
            {/* {formatTime(currentTime)} / {formatTime(duration)} */}
            @TODO
          </p>
        </button>
      </div>
      <div className="player__section player__section--middle">
        <h3 className="player__title">Playing: @TODO</h3>
        <div
          className="player__tooltip"
          //   style={{
          //     left: `${tooltipPosition}px`,
          //     opacity: `${showTooltip ? "1" : "0"}`,
          //   }}
        >
          @TODO
        </div>
      </div>
      <div className="player__section player__section--right">
        <button onClick={() => {}} className="player__speed" type="button">
          <p>FASTNESS</p>
          <span className="player__speeddisplay">@TODO &times;</span>
        </button>
        <div className="player__volume">
          <p>LOUDNESS</p>
          <div className="player__inputs">
            {/* <VolumeBars volume={this.volume} /> */}
            @TODO
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        // onPlay={this.playPause}
        // onPause={this.playPause}
        // onTimeUpdate={this.timeUpdate}
        // onVolumeChange={this.volumeUpdate}
        // onLoadedMetadata={this.groupUpdates}
        src={audio.url}
      />
    </div>
  )
}
