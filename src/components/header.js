/** @jsx jsx */
import { jsx, Flex, Box, useColorMode } from "theme-ui"
import SkipLink from "./skip-link"
import NavLink from "./nav-link"
import Button from "./button"

const modes = ["default", "dark"]

export default ({ fullWidth }) => {
  const [mode, setMode] = useColorMode()

  const cycleMode = e => {
    const i = modes.indexOf(mode)
    const next = modes[(i + 1) % modes.length]
    setMode(next)
  }

  console.log({ fullWidth })

  return (
    <Box
      as="header"
      sx={{
        width: `100%`,
        px: 3,
      }}
    >
      <Flex
        sx={{
          justifyContent: "space-between",
          maxWidth: fullWidth ? 1024 : 800,
          m: `auto`,
          py: 2,
          px: 3,
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
            {mode === `default` ? `light` : `dark`}
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}
