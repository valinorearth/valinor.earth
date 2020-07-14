const htmlnano = require("htmlnano");

const preset = Object.assign(htmlnano.presets.safe, {
  removeRedundantAttributes: true,
});

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  htmlmin: async function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html") && !isDev) {
      const { html } = await htmlnano.process(
        content,
        {
          minifySvg: {
            plugins: [{ removeViewBox: false }],
          },
        },
        preset
      );

      return html;
    }

    return content;
  },
};
