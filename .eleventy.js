module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addWatchTarget("./styles/**/*");
  eleventyConfig.addWatchTarget("./static/css/universal.css");

  return {
    dir: {
      input: "content",
      includes: "../_includes"
    }
  };

};