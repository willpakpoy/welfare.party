module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addWatchTarget("./styles/**/*");

  return {
    dir: {
      input: "content",
      includes: "../_includes"
    }
  };

};