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
      color: "primary",
      bg: "muted",
      border: 0,
      borderRadius: 2,
      "&:hover": {
        color: "secondary",
      },
      "&:focus": {
        outlineWidth: "2px",
        outlineStyle: "dashed",
        outlineColor: "secondary",
      },
    }}
  />
)
