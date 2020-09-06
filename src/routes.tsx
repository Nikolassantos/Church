import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InitialScreen from './pages/InitialScreen';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import prayerScreen from './pages/prayerScreen';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" >
        <Stack.Screen name="Home" component={InitialScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Cadastro" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="prayerScreen" component={prayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}