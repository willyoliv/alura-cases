module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/perguntas',
        destination: '/faqs',
        permanent: true,
      },
    ]
  },
};
