/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ children, ...props }) => {
  return (
    <div
      {...props}
      sx={{
        backgroundColor: "muted",
        marginLeft: "-1.5rem",
        padding: ".5rem 1.25rem",
        border: "0.25rem solid",
        borderColor: "highlight",
      }}
    >
      {children}
    </div>
  )
}
