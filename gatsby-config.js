module.exports = {
  siteMetadata: {
    title: `A11y Coffee`,
    description: `The introduction on web accessibility that I want to give every single web developer.`,
    author: `@amber1ey`,
    image: "/a11y-coffee.png",
    siteUrl: "https://a11y.coffee/",
  },
  plugins: [
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        remarkPlugins: [require(`remark-slug`)],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
          { resolve: "gatsby-remark-numbered-footnotes" },
          { resolve: "gatsby-remark-a11y-emoji" },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    "gatsby-plugin-theme-ui",
    "gatsby-theme-style-guide",
    "gatsby-plugin-react-helmet",
  ],
}
