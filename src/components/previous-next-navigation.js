/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const styles = {
  display: `flex`,
  alignItems: `center`,
  height: `100%`,
  px: 2,
  py: 2,
  bg: "primary",
  color: "background",
  textDecoration: "none",
  fontSize: 3,
  fontWeight: "bold",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "primary",
  borderRadius: 2,
  "&:hover": {
    borderColor: "secondary",
    bg: "secondary",
    color: "background",
  },
  "&:focus": {
    borderColor: "secondary",
    bg: "secondary",
    color: "background",
    outlineWidth: "2px",
    outlineStyle: "dashed",
    outlineColor: "secondary",
  },
}

export default ({ children, ...props }) => {
  return (
    <nav aria-label="Article Pagination">
      <ul
        sx={{
          display: `grid`,
          gridTemplateColumns: `50% 50%`,
          gridTemplateAreas: `"previous next"`,
          gridGap: `4px`,
          padding: 0,
          listStyleType: `none`,
        }}
      >
        {props.previous && (
          <li sx={{ gridArea: `previous` }}>
            <Link
              to={props.previous.link}
              sx={{ ...styles, justifyContent: `flex-start` }}
            >
              &larr; Previous: {props.previous.title}
            </Link>
          </li>
        )}
        {props.next && (
          <li
            sx={{
              gridArea: `next`,
            }}
          >
            <Link
              to={props.next.link}
              sx={{ ...styles, justifyContent: `flex-end` }}
            >
              Next: {props.next.title} &rarr;
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
