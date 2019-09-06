/** @jsx jsx */
import { jsx } from "theme-ui"

export default props => (
  <a
    children="Skip to content"
    {...props}
    href="#content"
    sx={{
      clip: "rect(0 0 0 0)",
      height: 1,
      width: 1,
      m: -1,
      p: 0,
      overrflow: "hidden",
      position: "absolute",
      top: -9999,
      ":focus": {
        p: 3,
        position: "fixed",
        zIndex: 4,
        top: 0,
        left: 0,
        m: 2,
        fontWeight: "bold",
        color: "black",
        bg: "white",
        width: "auto",
        height: "auto",
        clip: "auto",
      },
    }}
  />
)
