/** @jsx jsx */
import { jsx, ThemeProvider, Box } from "theme-ui"

const gradient = `linear-gradient(120deg,
  rgba(132, 132, 132, .2),
  rgba(51, 51, 238, 0),
  rgba(51, 51, 238, .25))`

export default props => (
  <ThemeProvider
    theme={{
      styles: {
        p: {
          ":first-of-type": {
            variant: "text.display",
            fontSize: [6, 7, 7],
          },
          fontWeight: "bold",
          mt: 0,
          mb: 3,
        },
        h1: {
          fontSize: [3, 3, 4],
          fontWeight: "heading",
          letterSpacing: "initial",
          mt: 0,
          mb: 4,
        },
        a: {
          display: "inline-block",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: 2,
          p: 3,
          color: "primary",
          bg: "background",
          mr: 3,
          mb: 3,
          borderRadius: 6,
          ":hover": {
            color: "background",
            bg: "text",
          },
        },
      },
    }}
  >
    <div
      sx={{
        color: "background",
        bg: "primary",
        backgroundImage: gradient,
        width: `100%`,
        p: 4,
      }}
    >
      <Box sx={{ maxWidth: 1024, m: `auto`, p: 3 }}>{props.children}</Box>
    </div>
  </ThemeProvider>
)
