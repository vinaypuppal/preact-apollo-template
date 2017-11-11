const graphql = require('preact-cli-plugin-graphql');

const netlifyPlugin = require('preact-cli-plugin-netlify');

export default (config, env, helpers) => {
	graphql(config);
	netlifyPlugin(config);
};
