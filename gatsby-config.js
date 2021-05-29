module.exports = {
  siteMetadata: {
    description: "Personal page and Portfolio of Martín Nepita",
    locale: "en",
    title: "Martín Nepita | Backend Developer",
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