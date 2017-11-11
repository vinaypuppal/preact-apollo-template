import { h, Component } from 'preact';
import { Router } from 'preact-router';
// Apollo
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

const client = new ApolloClient({
	// By default, this client will send queries to the
	//  `/graphql` endpoint on the same host configure endpoint using `uri` option
	link: new HttpLink({ uri: 'https://5rrx10z19.lp.gql.zone/graphql' }),
	cache: new InMemoryCache()
});

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<ApolloProvider client={client}>
				<div id="app">
					<Header />
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Profile path="/profile/" user="me" />
						<Profile path="/profile/:user" />
					</Router>
				</div>
			</ApolloProvider>
		);
	}
}
