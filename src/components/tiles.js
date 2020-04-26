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
          p: [3, 4],
        }}
        {...props}
      />
    </ThemeProvider>
  )
}
