import prismtomorrow from "@theme-ui/prism/presets/prism-tomorrow.json"

let white = "#fff"
let apricot = "#f7882f"
let citrus = "#f7c331"
let darkCitrus = "#D19D0B"
let steel = "#0a1612"
let lightSteel = "#303C38"
let watermelon = "#CC080C"
let neutral = "#efefef"
let lightNeutral = "#F4F4F4"
let fresh = "#9CB1FF"
let plant = "#249786"
let darkPlant = "#007160"

let focusStyles = {
  outlineWidth: "3px",
  outlineStyle: "dashed",
  outlineColor: "secondary",
}

export default {
  useColorSchemeMediaQuery: true,
  initialColorModeName: "light",
  colors: {
    text: steel,
    background: white,
    primary: plant,
    secondary: watermelon,
    muted: neutral,
    highlight: citrus,
    accent: apricot,
    gray: "#777",
    darken: darkPlant,
    codeBg: neutral,
    modes: {
      dark: {
        text: white,
        background: steel,
        primary: citrus,
        secondary: fresh,
        muted: lightSteel,
        highlight: "#29112c",
        accent: "#c0f",
        gray: "#999",
        darken: darkCitrus,
        codeBg: lightNeutral,
      },
    },
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [16, 18, 20, 22, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
    display: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  sizes: {
    sidebar: 256,
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    display: {
      variant: "text.heading",
      fontSize: [5, 6],
      fontWeight: "display",
      letterSpacing: "-0.03em",
      mt: 3,
    },
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
    },
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024,
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    img: {
      maxWidth: "100%",
      height: "auto",
    },
    p: {
      fontSize: 2,
    },
    li: {
      fontSize: 2,
    },
    ol: {
      fontSize: 2,
    },
    h1: {
      variant: "text.display",
    },
    h2: {
      variant: "text.heading",
      fontSize: 5,
    },
    h3: {
      variant: "text.heading",
      fontSize: 4,
    },
    h4: {
      variant: "text.heading",
      fontSize: 3,
    },
    h5: {
      variant: "text.heading",
      fontSize: 2,
    },
    h6: {
      variant: "text.heading",
      fontSize: 1,
    },
    a: {
      color: "darken",
      "&:hover": {
        color: "secondary",
      },
      "&:focus": {
        ...focusStyles,
      },
    },
    pre: {
      // fontFamily: "monospace",
      fontSize: 1,
      p: 3,
      // color: "text",
      bg: "codeBg",
      // overflow: "auto",
      // code: {
      //   color: "inherit",
      // },
      ...prismtomorrow,
    },
    code: {
      ...prismtomorrow,
    },
    inlineCode: {
      ...prismtomorrow,
      bg: "none",
      color: "darken",
    },
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      [["th", "td"]]: {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "muted",
        borderBottomStyle: "solid",
      },
    },
    th: {
      verticalAlign: "bottom",
      borderBottomWidth: "2px",
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: "1px",
    },
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "muted",
    },
    blockquote: {
      margin: "0 1.5rem 1.5rem 0",
      padding: "0 0 0 1.5rem",
      borderLeft: "0.25rem solid",
      borderColor: "primary",
    },
    xray: {
      "*": {
        outline: "1px solid rgba(0, 192, 255, .25)",
      },
    },
  },
}
