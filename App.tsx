import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import NonAuthenticated from './navigation/MainNavigation';
import store, {persistor} from './redux/store';
import RootNAvigation from './navigation/RootNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <RootNAvigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
