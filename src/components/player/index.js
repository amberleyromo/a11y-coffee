import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { FaPlay, FaPause } from "react-icons/fa"
import formatTime from "../../lib/format-time"
import VolumeBars from "./volume-bars"

import "./player.css"

export default function Player({ audio }) {
  const { url, title, slug } = audio
  const audioRef = useRef()
  const progressRef = useRef()

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0) // eventually read from localStorage
  const [duration, setDuration] = useState(null)
  const [tooltipPosition, setTooltipPosition] = useState(0)
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipTime, setTooltipTime] = useState("0:00")
  const [progressTime, setProgressTime] = useState(0)

  const togglePlay = e => {
    const method = isPlaying ? "pause" : "play"
    audioRef.current[method]()
    setIsPlaying(!isPlaying)
  }

  //   const handlePlayPause = () => {
  //     setIsPlaying(!isPlaying)
  //   }

  const updateTime = e => {
    const { currentTime = 0 } = e.currentTarget

    const progressTime = (currentTime / duration) * 100
    if (Number.isNaN(progressTime)) return

    setCurrentTime(currentTime)
    setProgressTime(progressTime)
  }

  const updateDuration = e => {
    const { duration = 0 } = e.currentTarget
    setDuration(duration)
  }

  const groupedInitialUpdates = e => {
    updateTime(e)
    updateDuration(e)
  }

  const scrubTime = e =>
    (e.nativeEvent.offsetX / progressRef.current.offsetWidth) * duration

  const scrub = e => {
    audioRef.current.currentTime = scrubTime(e)
  }

  const seekTime = e => {
    console.log(`e.nativeEvent.offsetX`, e.nativeEvent.offsetX)
    setTooltipPosition(e.nativeEvent.offsetX)
    setTooltipTime(formatTime(scrubTime(e)))
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
        <div
          className="progress"
          onClick={scrub}
          onMouseMove={seekTime}
          onMouseEnter={() => {
            setShowTooltip(true)
          }}
          onMouseLeave={() => {
            setShowTooltip(false)
          }}
          ref={progressRef}
        >
          <div
            className="progress__time"
            style={{ width: `${progressTime}%` }}
          />
        </div>
        <h3 className="player__title">Playing: {title}</h3>
        <div
          className="player__tooltip"
          style={{
            left: `${tooltipPosition}px`,
            opacity: `${showTooltip ? "1" : "0"}`,
          }}
        >
          {tooltipTime}
        </div>
      </div>
      <div className="player__section player__section--right">
        <button onClick={() => {}} className="player__speed" type="button">
          <p>SPEED</p>
          <span className="player__speeddisplay">@TODO &times;</span>
        </button>
        <div className="player__volume">
          <p>VOLUME</p>
          <div className="player__inputs">
            {/* <VolumeBars volume={this.volume} /> */}
            @TODO
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        // onPlay={handlePlayPause}
        // onPause={handlePlayPause}
        onTimeUpdate={updateTime}
        // onVolumeChange={this.volumeUpdate}
        onLoadedMetadata={groupedInitialUpdates}
        src={url}
      />
    </div>
  )
}
