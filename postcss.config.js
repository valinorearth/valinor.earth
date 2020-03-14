// https://tailwindcss.com/docs/controlling-file-size#setting-up-purgecss
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.njk", "./src/**/*.html", "./src/**/*.md"],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-nesting"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production"
      ? [purgecss, require("cssnano")]
      : []),
  ],
};
