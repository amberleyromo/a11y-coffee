/** @jsx jsx */
import { jsx, Flex, useColorMode } from "theme-ui"
import SkipLink from "./skip-link"
import NavLink from "./nav-link"
import Button from "./button"

const modes = ["light", "dark"]

export default () => {
  const [mode, setMode] = useColorMode()

  const cycleMode = e => {
    console.log(`cycleMode`)
    console.log(`currentMode`, { mode })
    const i = modes.indexOf(mode)
    const next = modes[(i + 1) % modes.length]
    console.log(`newMode`, { next })
    console.log(`---------------`)
    setMode(next)
  }

  return (
    <Flex
      as="header"
      sx={{
        justifyContent: "space-between",
        maxWidth: 1024,
        m: `auto`,
        py: 3,
      }}
    >
      <SkipLink>Skip to content</SkipLink>
      <Flex>
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
  )
}
