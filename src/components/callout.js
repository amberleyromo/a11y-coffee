/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ children, ...props }) => {
  return (
    <div
      {...props}
      sx={{
        ml: "-1.5rem",
        p: ".5rem 1.25rem",
        color: "text",
        border: "2px solid",
      }}
    >
      {children}
    </div>
  )
}
