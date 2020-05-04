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
  const [currentVolume, setCurrentVolume] = useState(1)
  const [playbackRate, setPlaybackRate] = useState(1)

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

  const scrubTime = e =>
    (e.nativeEvent.offsetX / progressRef.current.offsetWidth) * duration

  const scrub = e => {
    audioRef.current.currentTime = scrubTime(e)
  }

  const seekTime = e => {
    setTooltipPosition(e.nativeEvent.offsetX)
    setTooltipTime(formatTime(scrubTime(e)))
  }

  const manageVolumeBars = e => {
    audioRef.current.volume = e.currentTarget.value
    setCurrentVolume(`${e.currentTarget.value}`)
  }

  // this pretty much only matters for initializing the
  // user's previous volume pref, if exists
  const updateVolume = e => {
    // @TODO
    //   const { timeWasLoaded } = this.state
    //   // Check if the user already had a curent volume
    //   if (timeWasLoaded) {
    //     const lastVolume = localStorage.getItem(`lastVolumeSetting`)
    //     if (lastVolume) {
    //       e.currentTarget.volume = JSON.parse(lastVolume).lastVolumePref
    //     }
    //     this.setState({ timeWasLoaded: false })
    //   }
  }

  const updatePlaybackSpeed = change => {
    const playbackRateMax = 2.5
    const playbackRateMin = 0.75

    let newSpeed = playbackRate + change

    if (newSpeed > playbackRateMax) {
      newSpeed = playbackRateMin
    }

    if (newSpeed < playbackRateMin) {
      newSpeed = playbackRateMax
    }

    setPlaybackRate(newSpeed)
  }

  const increasePlaybackSpeed = () => {
    updatePlaybackSpeed(0.25)
  }

  const decreasePlaybackSpeed = e => {
    e.preventDefault()
    updatePlaybackSpeed(-0.25)
  }

  const groupedInitialUpdates = e => {
    updateTime(e)
    updateDuration(e)
    updateVolume(e)
  }

  useEffect(() => {
    audioRef.current.playbackRate = playbackRate
  }, [playbackRate])

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
        <button
          onClick={increasePlaybackSpeed}
          onContextMenu={decreasePlaybackSpeed}
          className="player__speed"
          type="button"
        >
          <p>SPEED</p>
          <span className="player__speeddisplay">{playbackRate} &times;</span>
        </button>
        <div className="player__volume">
          <p>VOLUME</p>
          <div className="player__inputs">
            <VolumeBars onChange={manageVolumeBars} />
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        // onPlay={handlePlayPause}
        // onPause={handlePlayPause}
        onTimeUpdate={updateTime}
        onVolumeChange={updateVolume}
        onLoadedMetadata={groupedInitialUpdates}
        src={url}
      />
    </div>
  )
}
