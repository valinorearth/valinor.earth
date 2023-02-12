# Valinor Earth

> [Valinor Earth](https://valinor.earth) has a software suite for companies to monitor and analyze their carbon-offset credits, helping them take action on where to spend their money.

Think few years ahead and how we want our website to be;

- enterprise
- multiple offerings
- customer testimonials
- clear process (might change so be prepared to have it replaced and/or tweaked)

## Requirements

* [Bundler](http://bundler.io/)
* [Jekyll](https://jekyllrb.com/)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Ruby](https://www.ruby-lang.org/en/)

## Development

* `bundle install` to install Ruby gems
* `npm ci` to install npm packages listed in `package-lock.json`
* `npm run start` or `npm run dev` to compile the site with development settings and run BrowserSync
* Remember to update browser listings regularly - `npx browserslist@latest --update-db`.

Built with [Jekyll](https://jekyllrb.com/) and [Tailwind](https://tailwindcss.com). The Gulpfile does the following;

- Compiles Tailwind
- Strips out unused CSS using Tailwind's `content` option
- Runs [Autoprefixer](https://github.com/postcss/autoprefixer)
- Minifies your CSS
- Compiles Jekyll
- Runs [Browsersync](https://www.browsersync.io/) for local development

## Production

* `npm run build:dev` to compile the site with development settings
* `npm run build:production` or `npm run build` to compile the site for production