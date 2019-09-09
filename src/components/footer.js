/** @jsx jsx */
import { jsx, Footer, Container } from "theme-ui"
import NavLink from "./nav-link"

export default props => (
  <Footer
    sx={{
      py: 3,
    }}
  >
    <Container>
      <div sx={{ display: "flex" }}>
        <div sx={{ mx: "auto" }} />
        <NavLink to="/about/">About</NavLink>
        <NavLink href="/credits/">Credits</NavLink>
        <NavLink href="https://github.com/amberleyromo/a11y-coffee">
          GitHub
        </NavLink>
      </div>
    </Container>
  </Footer>
)
