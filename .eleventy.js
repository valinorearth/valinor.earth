const fs = require("fs");
const path = require("path");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const ErrorOverlay = require("eleventy-plugin-error-overlay");
const pluginLocalRespimg = require("eleventy-plugin-local-respimg");
const markdownIt = require("markdown-it");

const collections = require("./eleventy/collections.js");
const filters = require("./eleventy/filters.js");
const transforms = require("./eleventy/transforms.js");

const isDev = process.env.NODE_ENV === "development";

const manifestPath = path.resolve(__dirname, "dist", "assets", "manifest.json");
const manifest = isDev
  ? {
      "main.js": "/assets/index.js",
      "main.css": "/assets/index.css",
    }
  : JSON.parse(fs.readFileSync(manifestPath, { encoding: "utf8" }));

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  if (isDev) {
    eleventyConfig.addPlugin(ErrorOverlay);
  } else {
    eleventyConfig.addPlugin(pluginLocalRespimg, {
      folders: {
        source: "src",
        output: "dist",
      },
      images: {
        resize: {
          min: 250,
          max: 2100,
          step: 150,
        },
        lazy: false,
        additional: [],
        watch: {
          src: "img/**/*",
          dest: "img/**/*",
        },
      },
    });
  }

  Object.keys(collections).forEach((key) =>
    eleventyConfig.addCollection(key, collections[key])
  );

  // Layout aliases make templates more portable.
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");

  // Adds a universal shortcode to embed bundled CSS. In Nunjack templates: {% bundledCss %}
  eleventyConfig.addShortcode("bundledCss", function () {
    return manifest["main.css"]
      ? `<link href="${manifest["main.css"]}" rel="stylesheet" data-turbolinks-track="reload" />`
      : "";
  });

  // Adds a universal shortcode to embed bundled JS. In Nunjack templates: {% bundledJs %}
  eleventyConfig.addShortcode("bundledJs", function () {
    return manifest["main.js"]
      ? `<script src="${manifest["main.js"]}" async defer data-turbolinks-track="reload"></script>`
      : "";
  });

  // Adds a universal shortcode to get permalink by contentId and locale {% getPermalink contentId, locale%}
  eleventyConfig.addShortcode("getPermalink", function (
    collection,
    contentId,
    locale = "en"
  ) {
    const localePages = collection.filter((p) => p.data.locale === locale);
    const page = localePages.find((p) => p.data.contentId === contentId);

    if (page) return page.url;
  });

  eleventyConfig.addPairedNunjucksShortcode("onDevelopment", function (
    content
  ) {
    if (isDev) return content;
    return "";
  });

  // Copy all images directly to dist.
  eleventyConfig.addPassthroughCopy({ "src/public": "." });
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });

  // Reload the page every time the JS/CSS are changed.
  eleventyConfig.setBrowserSyncConfig({
    ...eleventyConfig.browserSyncConfig,
    files: [manifestPath],
  });

  // Filters
  Object.keys(filters).forEach((key) =>
    eleventyConfig.addFilter(key, filters[key])
  );

  // Transform
  Object.keys(transforms).forEach((transformName) => {
    eleventyConfig.addTransform(transformName, transforms[transformName]);
  });

  const markdownLib = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
    typographer: true,
  });

  eleventyConfig.setLibrary("md", markdownLib);

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
