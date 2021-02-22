module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addWatchTarget("./static/css/**/*");

  return {
    dir: {
      input: "content",
      includes: "../_includes"
    }
  };

};