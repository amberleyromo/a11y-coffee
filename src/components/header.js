/** @jsx jsx */
import { jsx, Header, Container, Flex, useColorMode } from "theme-ui"
import NavLink from "./nav-link"
import Button from "./button"

const modes = ["swiss", "gatsby", "dark", "deep"]
// trigger a change
export default () => {
  const [mode, setMode] = useColorMode()

  const cycleMode = e => {
    const i = modes.indexOf(mode)
    const next = modes[(i + 1) % modes.length]
    setMode(next)
  }

  return (
    <Header>
      <Container>
        <Flex sx={{ justifyContent: "space-between" }}>
          <Flex sx={{ alignItems: "center" }}>
            <NavLink to="/">
              A11y Coffee{" "}
              <span role="img" aria-label="coffee cup emoji">
                ☕️
              </span>
            </NavLink>
          </Flex>
          <Flex>
            {/* <NavLink to="/about/">About</NavLink>
            <NavLink href="/friday-a11y/">Friday A11Y</NavLink> */}
            <Button
              sx={{
                ml: 2,
              }}
              onClick={cycleMode}
            >
              {mode}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Header>
  )
}
