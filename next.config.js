const withSass = require('@zeit/next-sass');
module.exports = withSass({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/our-day': { page: '/our-day' },
      '/when-where': { page: '/when-where' },
      '/faqs': { page: '/faqs' },
      '/registry': { page: '/registry' },
    }
  }
});