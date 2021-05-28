module.exports = {
  siteMetadata: {
    description: "Personal page of Martin Nepita",
    locale: "en",
    title: "Martin Nepita",
    formspreeEndpoint: "https://formspree.io/f/xqkwqpjn",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "dark-green",
      },
    },
  ],
}