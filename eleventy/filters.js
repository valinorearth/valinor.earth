const moment = require("moment");

module.exports = {
  // A debug utility.
  dump: (obj) => {
    console.log(obj);
    return obj;
  },
  // Removes directories from path starting with leftmost
  // remove("/src/pages/index.html", 1) -> "/pages/index.html"
  // remove("/src/pages/index.html", 2) -> "/index.html"
  removeDir: (path, level = 1) => {
    const arr = path.split("/");

    return arr.slice(level + 1).join("/");
  },
  // Formats date into a string
  date: (date, format, locale = "en") => {
    return moment(date).locale(locale).format(format);
  },
  // Returns number of locals availabe for the contentId
  numberOfLocalesForContentId: (all, contentId) => {
    const pages = all.reduce((acc, p) => {
      if (p.data.contentId === contentId) {
        return [...acc, p];
      }

      return acc;
    }, []);

    const locales = pages.reduce((acc, page) => [...acc, page.data.locale], []);
    return [...new Set(locales)].length;
  },
  objectToArray: (obj) => Object.entries(obj),
};
