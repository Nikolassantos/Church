import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InitialScreen from './pages/InitialScreen';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" >
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Cadstro" component={SignUp} />
        <Stack.Screen name="Home" component={InitialScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}