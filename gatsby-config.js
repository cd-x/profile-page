module.exports = {
    siteMetadata: {
      description: "Personal page of Rajrishi Vishwakarma",
      locale: "en",
      title: "Rajrishi Vishwakarma",
    },
    plugins: [
      {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
          basePath: "/",
          contentPath: "content/",
          showThemeLogo: true,
          theme: "dark-green",
        },
      },
    ],
  }