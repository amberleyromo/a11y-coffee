/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui"

export default props => {
  console.log(`props.fullWidth main`, props.fullWidth)
  return (
    <Flex
      as="main"
      sx={{
        justifyContent: `center`,
      }}
    >
      <Box
        sx={{
          pt: 0,
          pb: 5,
          px: props.fullWidth ? 0 : 3,
          maxWidth: props.fullWidth ? "none" : 800,
        }}
      >
        <div
          sx={
            {
              // display: ["block", "flex"],
              // mx: props.fullWidth ? 0 : -3,
            }
          }
        >
          <div
            id="content"
            sx={
              {
                //   width: "100%",
                //   minWidth: 0,
                //   px: props.fullWidth ? 0 : 3,
              }
            }
          >
            {props.children}
          </div>
        </div>
      </Box>
    </Flex>
  )
}
