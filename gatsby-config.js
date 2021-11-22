module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "David-Abderhalden",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
