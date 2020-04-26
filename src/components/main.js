/** @jsx jsx */
import { jsx, Box } from "theme-ui"

export default props => {
  return (
    <main id="content">
      <Box
        sx={{
          px: props.fullWidth ? 0 : 3,
          py: props.fullWidth ? 0 : 4,
          maxWidth: props.fullWidth ? "none" : 800,
          m: props.fullWidth ? "inherit" : "auto",
        }}
      >
        {props.children}
      </Box>
    </main>
  )
}
