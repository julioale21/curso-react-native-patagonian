import React from 'react';
const {
  createNativeStackNavigator,
} = require('@react-navigation/native-stack');

import { WelcomeScreen, ExperimentalScreen } from '../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Experimental" component={ExperimentalScreen} />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
