/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';

import MainScreen from './src/screens/MainScreen';
import Navigator from './src/routes/drawer';
import RootDrawerNavigator from './src/routes/drawer';
import { StatusBar } from 'react-native';

// To improve Android application speed: https://reactnative.dev/docs/hermes
// declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <RootDrawerNavigator />
    </>
      
  );
};

export default App;
