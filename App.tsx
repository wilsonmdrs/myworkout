import {NativeBaseProvider, View, StatusBar} from 'native-base';
import React from 'react';
import {theme} from './src/theme';
import { Routes } from '@routes/index';
import { SafeAreaView } from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView style={{flex:1, backgroundColor:theme.colors.gray["600"]}}>
      <StatusBar backgroundColor={theme.colors.gray["600"]} barStyle={'light-content'}  />
          <Routes />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default App;
