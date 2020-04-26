/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui"
import { useState, useRef } from "react"
import { Global } from "@emotion/core"

import SkipLink from "./skip-link"
import Header from "./header"
import Main from "./Main"
import Footer from "./footer"
// import Sidebar from './sidebar'
// import Pagination from './pagination'
// import EditLink from './edit-link'
// import Head from './head'

export default props => {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = useRef(null)
  console.log(`layout props.fullWidth`, props.fullWidth)

  return (
    <Styled.root>
      {/* <Head {...props} /> */}
      <Global
        styles={{
          "*": {
            boxSizing: "border-box",
          },
          body: {
            margin: 0,
          },
        }}
      />
      <SkipLink>Skip to content</SkipLink>
      <Box>
        <Header nav={nav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Main {...props} />
        <Footer />
      </Box>
    </Styled.root>
  )
}
