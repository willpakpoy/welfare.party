const pluginSass = require("eleventy-plugin-sass");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addWatchTarget("./styles/**/*");
  eleventyConfig.addPlugin(pluginSass, {sourcemaps: true});

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data"
    }
  };

};