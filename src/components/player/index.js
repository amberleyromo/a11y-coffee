/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useEffect, useRef } from "react"
import { FaPlay, FaPause } from "react-icons/fa"
import formatTime from "../../lib/format-time"
import VolumeBars from "./volume-bars"

// useEffect is a no-op in SSR
// https://github.com/gatsbyjs/gatsby/issues/13947#issuecomment-491214724

export default function Player({ audio }) {
  // @TODO: use slug
  // const { url, title, slug } = audio
  const { url, title } = audio
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

  useEffect(() => {
    audioRef.current.volume = currentVolume
  }, [currentVolume])

  useEffect(() => {
    audioRef.current.playbackRate = playbackRate
  }, [playbackRate])

  /*
   Helper methods
   */

  const togglePlay = e => {
    const method = isPlaying ? "pause" : "play"
    audioRef.current[method]()
    setIsPlaying(!isPlaying)
  }

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

  const scrubTime = e => {
    return (e.nativeEvent.offsetX / progressRef.current.offsetWidth) * duration
  }

  const scrub = e => {
    audioRef.current.currentTime = scrubTime(e)
  }

  const skipForward = (interval = 10) => {
    audioRef.current.currentTime = audioRef.current.currentTime + interval
  }

  const skipBackward = (interval = 10) => {
    audioRef.current.currentTime = audioRef.current.currentTime - interval
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

  const togglePlayOnSpace = e => {
    if (e.keyCode === 32) {
      e.preventDefault()
      togglePlay()
    }
  }

  const handleProgressKeydown = e => {
    // toggle play on spacebar
    if (e.keyCode === 32) {
      e.preventDefault()
      togglePlay()
    }

    // on left arrow, scrub 10 seconds earlier
    if (e.keyCode === 37) {
      skipBackward()
    }

    // on right arrow, scrub 10 seconds later
    if (e.keyCode === 39) {
      skipForward()
    }
  }

  /*
   Styles
   */

  const playerCss = {
    bottom: 0,
    width: `100%`,
    bg: `playerBg`,
    borderWidth: "thin",
    borderStyle: "solid",
    borderColor: "primary",
    color: `#fff`,
    display: `flex`,
    flexWrap: `wrap`,
    position: `sticky`,
    top: `-1px`,
    zIndex: 2,
  }

  const playerSectionCss = {
    order: 2,
    fontSize: `1rem`,
  }

  const playerSectionLeftCss = {
    width: `140px`,
    minWidth: `80px`,
    "@media (max-width: 650px)": {
      flex: 1,
    },
    "& > *": {
      width: `100%`,
    },
  }

  const playerSectionMiddleCss = {
    position: `relative`,
    flex: `1 1 auto`,
    borderRight: `1px solid rgba(0, 0, 0, 0.6)`,
    display: `flex`,
    flexDirection: `column`,
    "@media (max-width: 650px)": {
      order: 1,
      width: `100%`,
    },
  }

  const playerSectionRightCss = {
    display: `flex`,
    "& > *": {
      width: "100%",
    },
    "@media (max-width: 650px)": {
      flex: 2,
    },
  }

  const playerTitleCss = {
    fontSize: `1rem`,
    margin: 0,
    flex: `1 0 auto`,
    display: `flex`,
    alignItems: `center`,
    paddingLeft: `2rem`,
    maxWidth: `450px`,
    "@media (max-width: 650px)": {
      padding: `1rem`,
    },
  }

  const playerTooltipCss = {
    position: `absolute`,
    top: `34px`,
    transform: `translate(-50%)`,
    opacity: 0,
    "&:after": {
      content: '" "',
      position: `absolute`,
      bottom: `94%`,
      left: `50%`,
      marginLeft: `-2px`,
      borderWidth: `2px`,
      borderStyle: `solid`,
      borderColor: `transparent transparent #fff transparent`,
    },
  }

  const playerButtonCss = {
    bg: `playerBg`,
    border: 0,
    color: `#fff`,
    padding: `1rem`,
    height: `100%`,
    borderRight: `1px solid rgba(0, 0, 0, 0.6)`,
    outlineColor: `#f1c15d`,
  }

  const playerSpeedButtonCss = {
    flex: `0 1 auto`,
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `flex-start`,
    flexDirection: `column`,
    alignItems: `center`,
  }

  const playerParagraphCss = {
    fontSize: `0.8rem`,
    marginTop: `0.4rem`,
  }

  const playerVolumeCss = {
    fontSize: `1rem`,
    width: `120px`,
    textAlign: `center`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `1rem`,
    flexWrap: `wrap`,
    flex: `1 0 auto`,
    "&:focus-within": {
      outline: ` #ff0 auto 5px`,
    },
  }

  const playerProgressCss = {
    background: `#0d0d0d`,
    height: `2rem`,
    cursor: `crosshair`,
    overflow: `hidden`,
  }

  const playerProgressTimeCss = {
    borderRight: `1px solid rgba(0, 0, 0, 0.1)`,
    height: `100%`,
    transition: `width 0.1s`,
    background: theme =>
      `linear-gradient(30deg, ${theme.colors.muted} 0%, ${theme.colors.darken} 100%)`,
  }

  const playerSpeedDisplayCss = {
    height: `2.5rem`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  }

  return (
    <div sx={{ ...playerCss }}>
      <div sx={{ ...playerSectionCss, ...playerSectionLeftCss }}>
        <button
          sx={playerButtonCss}
          onClick={togglePlay}
          onKeyDown={togglePlayOnSpace}
          aria-label={isPlaying ? "pause" : "play"}
          type="button"
        >
          <p sx={{ ...playerParagraphCss, fontSize: `1.4rem` }}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </p>
          <p sx={{ ...playerParagraphCss, marginBottom: 0 }}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </p>
        </button>
      </div>
      <div sx={{ ...playerSectionCss, ...playerSectionMiddleCss }}>
        <div
          sx={playerProgressCss}
          role="progressbar"
          tabIndex="0"
          onKeyDown={handleProgressKeydown}
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
            sx={playerProgressTimeCss}
            style={{
              width: `${progressTime}%`,
            }}
          />
        </div>
        <h2 sx={playerTitleCss}>Playing: {title}</h2>
        <div
          role="tooltip"
          sx={{
            ...playerTooltipCss,
            left: `${tooltipPosition}px`,
            opacity: `${showTooltip ? "1" : "0"}`,
          }}
        >
          {tooltipTime}
        </div>
      </div>
      <div sx={{ ...playerSectionCss, ...playerSectionRightCss }}>
        <button
          sx={{ ...playerButtonCss, ...playerSpeedButtonCss }}
          onClick={increasePlaybackSpeed}
          onContextMenu={decreasePlaybackSpeed}
          type="button"
        >
          <p sx={{ ...playerParagraphCss }}>SPEED</p>
          <span sx={playerSpeedDisplayCss}>{playbackRate} &times;</span>
        </button>
        <div sx={playerVolumeCss}>
          <p sx={{ ...playerParagraphCss }}>VOLUME</p>
          <div sx={{ fontSize: 0 }}>
            <VolumeBars onChange={manageVolumeBars} />
          </div>
        </div>
      </div>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
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
