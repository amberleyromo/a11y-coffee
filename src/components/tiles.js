/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui"

export default ({ columns = 3, width, ...props }) => {
  const gridTemplateColumns = width
    ? `repeat(auto-fit, minmax(${width}px, 1fr))`
    : ["auto", `repeat(${columns}, 1fr)`]

  return (
    <ThemeProvider
      theme={{
        styles: {
          ol: {
            listStyle: "none",
            display: "grid",
            gridTemplateColumns,
            gridGap: 4,
            p: 0,
            m: 0,
          },
          ul: {
            listStyle: "none",
            display: "grid",
            gridTemplateColumns,
            gridGap: 4,
            p: 0,
            m: 0,
          },
          li: {
            height: "fit-content",
          },
        },
      }}
    >
      <div
        sx={{
          width: `100%`,
          p: 4,
        }}
      >
        <div
          sx={{
            m: `auto`,
            minWidth: 0,
            maxWidth: 1024,
            p: 3,
          }}
          {...props}
        />
      </div>
    </ThemeProvider>
  )
}
