module.exports = {
  siteMetadata: {
    title: "Gatsby Tutorial",
    description: "Following along with a Gatsby Udemy Course",
    author: "Aaron Macken",
    data: ["item 1", "item 2"],
    person: { name: "Aaron", age: 27 },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4m6mv3yrxqsh`,
        accessToken: `kFTmBkx1ivpyL5elhJwf6xPlOBQ03tvQDdGJW1GqEzw`,
      },
    },
  ],
}
