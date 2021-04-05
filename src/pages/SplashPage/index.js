import React, {useEffect} from 'react';
import {SafeAreaView, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {showToast, getBalance} from '../../utils';

import styles from './styles';

import AndroidSplash from '../../assets/images/splash_android_screen.png';

const SplashPage = ({navigation}) => {
  const createAccount = () => {
    try {
      AsyncStorage.multiGet(['privateKey', 'publicKey']).then(data => {
        if (data[0][1] && data[1][1]) {
          getBalance(
            data[1][1],
            data[0][1],
            (pubkey, privkey, balance, bnbBalance) => {
              navigation.replace('HomePage', {
                pubkey,
                privkey,
                balance,
                bnbBalance,
              });
            },
          );
        } else {
          navigation.replace('LoginPage');
        }
      });
    } catch (error) {
      showToast(error);
    }
  };

  useEffect(() => {
    createAccount();
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <Image source={AndroidSplash} style={styles.logo} />
    </SafeAreaView>
  );
};

export default SplashPage;
