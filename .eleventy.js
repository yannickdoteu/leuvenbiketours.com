module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/scss");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/lib");
  eleventyConfig.addPassthroughCopy("src/img");
  return {
    dir: { input: "src", output: "_site" }
  };
};

