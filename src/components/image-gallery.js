/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ columns = 2, width, children, ...props }) => {
  const gridTemplateColumns = width
    ? `repeat(auto-fit, minmax(${width}px, 1fr))`
    : ["auto", `repeat(${columns}, 1fr)`]

  return (
    <div
      {...props}
      sx={{
        display: `grid`,
        gridTemplateColumns,
        gridGap: 4,
        gridAutoRows: `minmax(100px, auto)`,
        margin: `2.4rem 0`,
      }}
    >
      {children}
    </div>
  )
}
