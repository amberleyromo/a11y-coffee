/** @jsx jsx */
import { jsx } from "theme-ui"

export default props => (
  <button
    {...props}
    sx={{
      appearance: "none",
      fontFamily: "inherit",
      fontSize: 1,
      fontWeight: "bold",
      m: 0,
      px: 2,
      py: 2,
      color: "darken",
      bg: "background",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "darken",
      borderRadius: 2,
      "&:hover": {
        borderColor: "secondary",
        color: "secondary",
      },
      "&:focus": {
        border: "transparent",
        outlineWidth: "2px",
        outlineStyle: "dashed",
        outlineColor: "secondary",
      },
    }}
  />
)
