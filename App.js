/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, Platform, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Route from './src/routes';

import Color from './src/styles/color';

const App: () => Node = () => {
  const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 10;
  return (
    <SafeAreaProvider>
      <View
        style={{
          height: STATUS_BAR_HEIGHT,
          backgroundColor: Color.FREE_SPEECH_BLUE,
        }}>
        <StatusBar
          translucent
          backgroundColor={Color.FREE_SPEECH_BLUE}
          barStyle="light-content"
        />
      </View>
      <Route />
    </SafeAreaProvider>
  );
};

export default App;
