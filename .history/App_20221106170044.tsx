import { NativeBaseProvider, StatusBar} from "native-base";
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { Pools } from './src/screens/Pools';


import {THEME} from './src/styles/themes'
import { AuthContextProvider } from "./src/contexts/AuthContext";
import React from "react";
import { Loading } from "./src/components/Loading";


export default function App() {
const [fontsLoades] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold});
  
  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
  {fontsLoades ? <Pools /> : <Loading/>}
  </AuthContextProvider>
    </NativeBaseProvider>
  );
}

