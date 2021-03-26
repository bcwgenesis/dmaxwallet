import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HistoryPage from '../pages/HistoryPage';
import HomePage from '../pages/HomePage';
import ScanQRPage from '../pages/ScanQRPage';
import SplashPage from '../pages/SplashPage';
import TopUpPage from '../pages/TopUpPage';
import TransferPage from '../pages/TransferPage';

import {Header} from '../uikits';

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
          options={({route, navigation}: any) => {
            return {
              header: () => (
                <Header
                  title={'History'}
                  onPressLeft={() => navigation.goBack()}
                />
              ),
            };
          }}
        />
        <Stack.Screen
          name="ScanQRPage"
          component={ScanQRPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TopUpPage"
          component={TopUpPage}
          options={({route, navigation}: any) => {
            return {
              header: () => (
                <Header
                  title={'Send BNB'}
                  onPressLeft={() => navigation.goBack()}
                  onPressRight={() => route.params?.onPressRight()}
                />
              ),
            };
          }}
        />
        <Stack.Screen
          name="TransferPage"
          component={TransferPage}
          options={({route, navigation}: any) => {
            return {
              header: () => (
                <Header
                  title={'Send TDMAX'}
                  onPressLeft={() => navigation.goBack()}
                  onPressRight={() => route.params?.onPressRight()}
                />
              ),
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
