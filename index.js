import React from 'react';
import {AppRegistry} from 'react-native';
import Navigator from './src/components/navigator';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/utils/store';
import {YellowBox} from 'react-native';

const appWrapper = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

YellowBox.ignoreWarnings(['Setting a timer']);

AppRegistry.registerComponent(appName, () => appWrapper);
