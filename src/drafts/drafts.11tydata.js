module.exports = {
  layout: 'article',
  eleventyComputed: {
    permalink: (data) =>
      process.env.NODE_ENV === 'production' ? false : data.permalink,
    eleventyExcludeFromCollections: (data) =>
      process.env.NODE_ENV === 'production',
  },
};
