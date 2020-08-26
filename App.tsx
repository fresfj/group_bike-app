import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Font, AppLoading } from 'expo';
// import * as Font from 'expo-font';

/*import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';*/
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';

import{ Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'

import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoaded ] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading/>
  } else {
      return (
        <>
        <AppStack/>
        <StatusBar style="dark"/>
        </>
      );
    }
}


