/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import isAbsoluteURL from "is-absolute-url"

export const BoxLinkStyles = {
  display: "block",
  px: 2,
  py: 2,
  color: "darken",
  textDecoration: "none",
  fontSize: 3,
  fontWeight: "bold",
  "&:hover": {
    color: "secondary",
  },
  "&:focus": {
    color: "secondary",
    outlineWidth: "2px",
    outlineStyle: "dashed",
    outlineColor: "secondary",
  },
}

export default ({ href, ...props }) => {
  const isExternal = isAbsoluteURL(href || "")
  if (isExternal) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...props} href={href} sx={BoxLinkStyles} />
  }
  const to = props.to || href
  return <Link {...props} to={to} sx={BoxLinkStyles} activeClassName="active" />
}
