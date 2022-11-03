import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box, VStack } from "native-base";


export default function App() {
  return (
    <NativeBaseProvider>
    <VStack flex={1} bgColor="fuchsia.300">
      <Text>Hello React Native</Text>
      <StatusBar style="auto" />
    </VStack>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
