import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { App } from './src/container';
import { name as appName } from './app.json';
import store from './src/store';

const app = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => app);
console.disableYellowBox = true;
