/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import Route from './src/routes';

import Color from './src/styles/color';

const App: () => Node = () => {
  return (
    <>
      <StatusBar backgroundColor={Color.FREE_SPEECH_BLUE} />
      <Route />
    </>
  );
};

export default App;
