const graphql = require('preact-cli-plugin-graphql');
const netlifyPlugin = require('preact-cli-plugin-netlify');

export default (config, { isProd }, helpers) => {
  graphql(config);
  netlifyPlugin(config);
  const babelConfig = helpers.getLoadersByName(config, 'babel-loader')[0].rule.options;
  babelConfig.plugins = [
    [
      'emotion',
      {
        extractStatic: isProd,
      },
    ],
  ].concat(babelConfig.plugins);
  // Disable css-loader by deleting its options
  const cssLoader = helpers.getLoadersByName(config, 'css-loader');
  cssLoader.forEach(({ loader }) => delete loader.options);
};
