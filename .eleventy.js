const pluginSass = require("eleventy-plugin-sass");

const sassPluginOptions = {
    watch: [
        'styles/*.{scss,sass}'
    ]
}
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, sassPluginOptions);
  eleventyConfig.addPassthroughCopy("static");

  return {
    dir: {
      input: "content"
    }
  };

};