/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import NavLink from "./nav-link"

export default () => (
  <Flex
    as="footer"
    sx={{
      justifyContent: `flex-end`,
      m: `auto`,
      maxWidth: 1024,
      py: 3,
    }}
  >
    <NavLink to="/about/">About</NavLink>
    <NavLink href="/credits/">Credits</NavLink>
    <NavLink href="https://github.com/amberleyromo/a11y-coffee">GitHub</NavLink>
    <NavLink href="https://ko-fi.com/amberley">Buy Me a Coffee</NavLink>
  </Flex>
)
