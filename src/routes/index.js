import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HistoryPage from '../pages/HistoryPage';
import HomePage from '../pages/HomePage';
import ScanQRPage from '../pages/ScanQRPage';
import SplashPage from '../pages/SplashPage';
import TopUpPage from '../pages/TopUpPage';
import TransferPage from '../pages/TransferPage';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashPage"
          component={SplashPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HistoryPage"
          component={HistoryPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ScanQRPage"
          component={ScanQRPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TopUpPage"
          component={TopUpPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TransferPage"
          component={TransferPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
