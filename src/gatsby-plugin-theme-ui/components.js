/** @jsx jsx */
import { jsx } from "theme-ui"
import Prism from "@theme-ui/prism"

const heading = Tag => props => {
  // checking for children avoids duplicates where heading is explicitly linked in code
  if (!props.id || props.children) return <Tag {...props} />
  return (
    <Tag {...props}>
      <a
        href={`#${props.id}`}
        sx={{
          color: "inherit",
          textDecoration: "none",
          ":hover": {
            textDecoration: "underline",
          },
        }}
      >
        {props.children}
      </a>
    </Tag>
  )
}

export default {
  pre: props => props.children,
  code: Prism,
  h2: heading("h2"),
  h3: heading("h3"),
  h4: heading("h4"),
  h5: heading("h5"),
  h6: heading("h6"),
}
