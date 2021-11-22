module.exports = {
  siteMetadata: {
    siteUrl: "https://www.david-abderhalden.ch",
    title: "David-Abderhalden",
  },
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/img/favicon.png`,
      },
    }
  ],
};
