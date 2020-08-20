import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { AppLoading } from 'expo';
import 
{ 
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts 
} 
  from '@expo-google-fonts/poppins'
import {
  Archivo_400Regular,
  Archivo_700Bold 
  } from '@expo-google-fonts/archivo'

import  Routes from './src/routes'
import Dashboard from './src/pages/Dashboard';
import SignUp from './src/pages/SignUp'

export default function App() {
  let [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold, 
    Poppins_700Bold,
    Archivo_400Regular,
    Archivo_700Bold,
  })
  if(!fonstLoaded) {
    return <AppLoading/>
  } else {
    return (
      <>
        <SignUp/>
        <StatusBar />
      </>
    );
  }

}

