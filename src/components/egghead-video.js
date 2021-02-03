import React, { useRef, useState, useCallback, useLayoutEffect } from "react"

const EggheadVideo = ({ link, title }) => {
  const [frameWidth, setFrameWidth] = useState(0)
  const frameRef = useRef()

  const handleResize = useCallback(() => {
    setFrameWidth(frameRef.current.clientWidth)
  }, [frameRef.current])

  useLayoutEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [frameRef.current])

  return (
    <>
      <iframe
        ref={frameRef}
        width={"100%"}
        height={frameWidth * (9 / 16)}
        src={`${link}/embed`}
        title={`Video: ${title}`}
        allowFullScreen
      />
      <p>
        <em>
          Lesson hosted on <a href={link}>egghead.io</a>
        </em>
      </p>
    </>
  )
}

export default EggheadVideo
