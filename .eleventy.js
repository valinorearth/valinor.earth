const fs = require("fs");
const path = require("path");
const moment = require("moment");
const pluginRss = require("@11ty/eleventy-plugin-rss");

const isDev = process.env.NODE_ENV === "development";

const manifestPath = path.resolve(__dirname, "dist", "assets", "manifest.json");
const manifest = isDev
  ? {
      "main.js": "/assets/index.js",
      "main.css": "/assets/index.css",
    }
  : JSON.parse(fs.readFileSync(manifestPath, { encoding: "utf8" }));

const collectionSortFn = function(a, b) {
  return b.date - a.date;
};

const collectionFilterByFn = (key, value) => {
  return obj => {
    if (Array.isArray(obj.data[key])) return obj.data[key].includes(value);
    return obj.data[key] === value;
  };
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addCollection("jaPosts", function(collection) {
    return collection
      .getAll()
      .filter(collectionFilterByFn("tags", "posts"))
      .filter(collectionFilterByFn("locale", "ja"))
      .sort(collectionSortFn);
  });

  eleventyConfig.addCollection("enPosts", function(collection) {
    return collection
      .getAll()
      .filter(collectionFilterByFn("tags", "posts"))
      .filter(collectionFilterByFn("locale", "en"))
      .sort(collectionSortFn);
  });

  eleventyConfig.addCollection("orderedTeam", function(collection) {
    return collection
      .getAll()
      .filter(collectionFilterByFn("tags", "team"))
      .sort(function(a, b) {
        if (a.data.order > b.data.order) {
          return -1;
        }
        if (a.data.order > b.data.order) {
          return 1;
        }

        return 0;
      });
  });

  // Layout aliases make templates more portable.
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");

  // Adds a universal shortcode to embed bundled CSS. In Nunjack templates: {% bundledCss %}
  eleventyConfig.addShortcode("bundledCss", function() {
    return manifest["main.css"]
      ? `<link href="${manifest["main.css"]}" rel="stylesheet" data-turbolinks-track="reload" />`
      : "";
  });

  // Adds a universal shortcode to embed bundled JS. In Nunjack templates: {% bundledJs %}
  eleventyConfig.addShortcode("bundledJs", function() {
    return manifest["main.js"]
      ? `<script src="${manifest["main.js"]}" async defer data-turbolinks-track="reload"></script>`
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

  eleventyConfig.addPairedNunjucksShortcode("onDevelopment", function(content) {
    if (isDev) return content;
    return "";
  });

  // Copy all images directly to dist.
  eleventyConfig.addPassthroughCopy({ "src/img/**.{jpg,png,svg}": "img" });
  eleventyConfig.addPassthroughCopy({ "src/img/**.ico": "/" });

  // Reload the page every time the JS/CSS are changed.
  eleventyConfig.setBrowserSyncConfig({ files: [manifestPath] });

  // A debug utility.
  eleventyConfig.addFilter("dump", obj => {
    console.log(obj);
    return obj;
  });

  eleventyConfig.addFilter("removeDir", (path, level = 1) => {
    const arr = path.split("/");

    return arr.slice(level + 1).join("/");
  });

  eleventyConfig.addFilter("date", (date, format, locale = "en") => {
    return moment(date)
      .locale(locale)
      .format(format);
  });

  eleventyConfig.addFilter("numberOfLocalesForContentId", (all, contentId) => {
    const pages = all.reduce((acc, p) => {
      if (p.data.contentId === contentId) {
        return [...acc, p];
      }
      return acc;
    }, []);

    let locales = pages.reduce((acc, page) => [...acc, page.data.locale], []);
    return [...new Set(locales)].length;
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
