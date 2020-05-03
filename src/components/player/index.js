import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { FaPlay, FaPause } from "react-icons/fa"
import formatTime from "../../lib/format-time"
import VolumeBars from "./volume-bars"

import "./player.css"

export default function Player({ audio }) {
  const { url, title, slug } = audio
  const audioRef = useRef()

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0) // eventually read from localStorage
  const [duration, setDuration] = useState(null)

  const togglePlay = e => {
    const method = isPlaying ? "pause" : "play"
    audioRef.current[method]()
    setIsPlaying(!isPlaying)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const updateTime = e => {
    const { currentTime = 0 } = e.currentTarget
    setCurrentTime(currentTime)
  }

  const updateDuration = e => {
    const { duration = 0 } = e.currentTarget
    setDuration(duration)
  }

  const groupedInitialUpdates = e => {
    updateTime(e)
    updateDuration(e)
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
            {formatTime(currentTime)} / {formatTime(duration)}
          </p>
        </button>
      </div>
      <div className="player__section player__section--middle">
        <h3 className="player__title">Playing: {title}</h3>
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
        onPlay={handlePlayPause}
        onPause={handlePlayPause}
        onTimeUpdate={updateTime}
        // onVolumeChange={this.volumeUpdate}
        onLoadedMetadata={groupedInitialUpdates}
        src={audio.url}
      />
    </div>
  )
}
