/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import NavLink from "./nav-link"

export default props => (
  <Box
    as="footer"
    sx={{
      py: 3,
      m: 4,
    }}
  >
    <Box>
      <div sx={{ display: "flex" }}>
        <div sx={{ mx: "auto" }} />
        <NavLink to="/about/">About</NavLink>
        <NavLink href="/credits/">Credits</NavLink>
        <NavLink href="https://github.com/amberleyromo/a11y-coffee">
          GitHub
        </NavLink>
      </div>
    </Box>
  </Box>
)
