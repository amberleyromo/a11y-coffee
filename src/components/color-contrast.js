/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({
  background = `#fff`,
  foreground = `#000`,
  ratio = `21:1`,
  fontSize = 3,
  ...props
}) => {
  return (
    <div
      {...props}
      sx={{
        position: `relative`,
        width: `100%`,
        height: `100%`,
        maxWidth: `200px`,
        maxHeight: `200px`,
        border: `1px solid #ccc`,
        margin: `0 auto`,
      }}
    >
      <div
        sx={{
          position: `absolute`,
          width: `100%`,
          height: `100%`,
          backgroundColor: background,
          display: `flex`,
        }}
      >
        <p
          sx={{
            color: foreground,
            margin: `auto`,
            fontSize,
          }}
        >
          {ratio}
        </p>
      </div>
    </div>
  )
}
