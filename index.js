import * as React from 'react';
import {AppRegistry} from 'react-native';
import Routes from './source/navigation/Routes';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

export default function App() {
  return <Routes />
}

AppRegistry.registerComponent(appName, () => App);
