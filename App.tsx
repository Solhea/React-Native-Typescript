import React from 'react';
import 'react-native-gesture-handler';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import store, {persistor} from './redux/store';
import StackNavigator from './navigation/navigation';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StackNavigator />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
