/** @jsx jsx */
import { jsx, Styled, Layout, Main, Container } from "theme-ui"
import { useState, useRef } from "react"
import { Global } from "@emotion/core"

import SkipLink from "./skip-link"
import Header from "./header"
// import Footer from './footer'
// import Sidebar from './sidebar'
// import Pagination from './pagination'
// import EditLink from './edit-link'
// import Head from './head'

export default props => {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = useRef(null)

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
      <Layout>
        <Header nav={nav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Main>
          <Container
            sx={{
              pt: 0,
              pb: 5,
              px: props.fullwidth ? 0 : 3,
              maxWidth: props.fullwidth ? "none" : 800,
            }}
          >
            <div
              sx={{
                display: ["block", "flex"],
                mx: props.fullwidth ? 0 : -3,
              }}
            >
              <div
                id="content"
                sx={{
                  width: "100%",
                  minWidth: 0,
                  px: props.fullwidth ? 0 : 3,
                }}
              >
                {props.children}
              </div>
            </div>
          </Container>
        </Main>
      </Layout>
    </Styled.root>
  )
}
