import React from 'react';
import 'react-native-gesture-handler';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ApolloProvider} from '@apollo/client';

import StackNavigator from './navigation/navigation';

import store, {persistor} from './redux/store';
import client from './graphql/graphql.config';

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
