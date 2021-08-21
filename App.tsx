import React from 'react';

const { NavigationContainer } = require('@react-navigation/native');

import { navigationRef } from './src/navigation/controls';
import MainNavigator from './src/navigation/MainNavigator';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  );
};
export default App;
