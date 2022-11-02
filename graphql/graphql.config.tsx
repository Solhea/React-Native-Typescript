import {ApolloClient, from, HttpLink, InMemoryCache} from '@apollo/client';
import {onError} from '@apollo/client/link/error';

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({message, locations, path}) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const httpLink = new HttpLink({uri: 'https://rickandmortyapi.com/graphql'});

const appLink = from([errorLink, httpLink]);

const client = new ApolloClient({
  link: appLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
    },
  },
});

export default client;
