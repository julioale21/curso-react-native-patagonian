import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
const { NavigationContainer } = require('@react-navigation/native');

import MainNavigator from './src/navigagtion/MainNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
export default App;
