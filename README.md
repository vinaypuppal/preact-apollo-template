# preact-default-boilerplate

## Documentation

- This is the apollo-graphql template for [preact-cli](https://github.com/developit/preact-cli) with [emotion](https://emotion.sh) instead of css-modules.
- [For Preact](https://preactjs.com/): General information about how to work with Preact, not specific to this template

## Usage

``` bash
npm install -g preact-cli
preact create vinaypuppal/preact-apollo-template my-project
cd my-project
npm install
npm run dev
```

Development server runs on port `8080`. If the default port is already in use on your machine it will start the development server on a random port.

## Commands

- `npm run start`: Runs `serve` or `dev`, depending on `NODE_ENV` value. Defaults to `dev server`

- `npm run dev`: Run a development, HMR server

- `npm run serve`: Run a production-like server

- `npm run build`: Production-ready build

- `npm run lint`: Pass JavaScript files using ESLint

- `npm run analyze`: Analyze built bundle with webpack-bundle-analyzer

- `npm run deploy`: Deploy to netlify

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `preact-cli`:

``` bash
preact create username/repo my-project
```