# valinor.earth

## Usage

### Development

```bash
$ npm install
$ npm run start # Generates and serve the pages
```

### Building

```bash
$ npm run build # Generates files which can be hosted
```

### File structure

Everything in `src/site` will be converted by Eleventy - this is the input folder. Once built, the files will be generated in `dist`.

The `src/img` folder will be copied verbatim and you can reference any file by using the direct path, eg.

```
<img src="/img/example.png">
```

The `src/js` and `src/css` folders will be bundled. The `index.js` &amp; `index.css` files are the entry points and thus required.

## Deployment

The code gets deployed when pushed to `master` branch.

In case if you want to deploy manually, set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables. Then, run the command `npm run deploy` from the project directory.
