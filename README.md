# valinor.earth

## Build system

- Uses [11ty](https://www.11ty.dev/docs/) to generate the static website.
  - Multi-language support. Read [multilingual pages](#multilingual-pages) to add new content in different languages.
  - Generates RSS feed for blog posts.
- CSS
  - Includes [Tailwind CSS](https://tailwindcss.com).
    - Recommended to create separate components for repeatedly used set of Tailwind classes. See files begin with ‘component’ in `src/css`.
  - Pre-processed with [PostCSS](https://postcss.org). Plugins included [postcss-import](https://github.com/postcss/postcss-import#readme), [postcss-nesting](https://github.com/jonathantneal/postcss-nesting#readme), [autoprefixer](https://github.com/postcss/autoprefixer#readme), and [cssnano](https://github.com/cssnano/cssnano).
- JavaScript
  - Uses [Babel](https://babeljs.io).
  - Includes [Stimulus](https://stimulusjs.org) and [Turbolinks](https://github.com/turbolinks/turbolinks).
- Asset bundling with [Webpack](https://webpack.js.org).

## Development

```bash
$ npm install
$ npm run start # Generates and serve the pages
```

### Building

```bash
$ npm run build # Generates files which can be hosted
```

### File structure

Everything in `src/site` will be converted by Eleventy - this is the input folder. Once built, files will be generated in `dist`.

The `src/img` folder will be copied verbatim and you can reference any file by using direct path, eg.:

```
<img src="/img/example.png">
```

The `src/js` and `src/css` folders will be bundled. The `index.js` and `index.css` files are entry points and thus required.

## Multilingual pages

The relationship between a page, or a blog post, written in two different languages is set up using the [front matter](https://www.11ty.dev/docs/data-frontmatter/). Two data values are necessary:

1. `locale`: `en` for English and `ja` for Japanese.
2. `contentId`: A unique identifier for a content written in different languages.

Once both `locale` and `contentId` are provided, the lanuage links on the header will link to the page with corresponding locale.

Adding support for more locale can be done through updating `locales` in [site.js](src/site/_data/site.js).

```yaml
# src/site/posts/2020-01-01-hello-world-en.md
---
locale: en
contentId: hello-world-2020
---

```

```yaml
# src/site/posts/2020-01-01-こんにちは世界-ja.md
---
locale: ja
contentId: hello-world-2020
---

```

## Deployment

We use [discharge](https://github.com/brandonweiss/discharge) to deploy to S3.

### Deploy manually

Set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables. Then, run the command `npm run deploy` from the project directory.

### CI

The Github CI is configured to deploy when pushed to `master` branch. See [configuration file](.github/workflows/deploy.yml)
