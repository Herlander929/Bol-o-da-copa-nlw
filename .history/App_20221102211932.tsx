import { NativeBaseProvider, StatusBar} from "native-base";
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { SignIn } from './src/screens/Signin';

import { Loading } from './src/components/loading';

import {THEME} from './src/styles/themes'


export default function App() {
const [fontsLoades] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold});
  
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
  {fontsLoades ? <SignIn/> : <Loading/>}
    </NativeBaseProvider>
  );
}

