module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/images/"); 
    eleventyConfig.addPassthroughCopy("./src/images/filter/"); 
    eleventyConfig.addPassthroughCopy("./src/favicons/"); 
    eleventyConfig.addPassthroughCopy("./src/style.css"); 
    eleventyConfig.addPassthroughCopy("./src/drinkorder.js"); 
    eleventyConfig.addPassthroughCopy("./src/tipcalc.js");
    eleventyConfig.addPassthroughCopy("./src/hero.js");
    eleventyConfig.addPassthroughCopy("./src/filter.js");
    // eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`); 

    return {
      dir: {
        input: "src",
        output: "public"
      }
    };
  };