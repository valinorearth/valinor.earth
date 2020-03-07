const fs = require("fs");
const path = require("path");

const isDev = process.env.APP_ENV === "development";

const manifestPath = path.resolve(__dirname, "dist", "assets", "manifest.json");
const manifest = isDev
  ? {
      "main.js": "/assets/index.js",
      "main.css": "/assets/index.css",
    }
  : JSON.parse(fs.readFileSync(manifestPath, { encoding: "utf8" }));

module.exports = function(eleventyConfig) {
  // Layout aliases make templates more portable.
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");

  // Adds a universal shortcode to embed bundled CSS. In Nunjack templates: {% bundledCss %}
  eleventyConfig.addShortcode("bundledCss", function() {
    return manifest["main.css"]
      ? `<link href="${manifest["main.css"]}" rel="stylesheet" />`
      : "";
  });

  // Adds a universal shortcode to embed bundled JS. In Nunjack templates: {% bundledJs %}
  eleventyConfig.addShortcode("bundledJs", function() {
    return manifest["main.js"]
      ? `<script src="${manifest["main.js"]}"></script>`
      : "";
  });

  // Adds a universal shortcode to get permalink by contentId and locale {% getPermalink contentId, locale%}
  eleventyConfig.addShortcode("getPermalink", function(
    collection,
    contentId,
    locale = "en"
  ) {
    const localePages = collection.filter(p => p.data.locale === locale);
    const page = localePages.find(p => p.data.contentId === contentId);

    if (page) return page.url;
  });

  // Copy all images directly to dist.
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });

  // Reload the page every time the JS/CSS are changed.
  eleventyConfig.setBrowserSyncConfig({ files: [manifestPath] });

  // A debug utility.
  eleventyConfig.addFilter("dump", obj => {
    console.log(obj);
    return obj;
  });

  eleventyConfig.addFilter("removeDir", (path, level = 1) => {
    const arr = path.split("/");
    console.log(path, arr);
    return arr.slice(level + 1).join("/");
  });

  return {
    dir: {
      input: "src/site",
      includes: "_includes", // relative to dir.input
      output: "dist",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
