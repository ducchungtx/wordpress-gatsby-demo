module.exports = {
  siteMetadata: {
    title: 'Wordpress Gatsby',
    subtitle: 'Data fetch from localhost/wp-gatsby'
  },
  plugins: ['gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "localhost/wp-gatsby",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
      }
    }
  ]
};
