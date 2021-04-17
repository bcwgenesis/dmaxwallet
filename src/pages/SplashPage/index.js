import React, {useEffect} from 'react';
import {SafeAreaView, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {showToast, getBalance} from '../../utils';

import styles from './styles';

import AndroidSplash from '../../assets/images/splash_android_screen.png';

const SplashPage = ({navigation}) => {
  const createAccount = () => {
    console.log('create account');
    try {
      AsyncStorage.multiGet(['privateKey', 'publicKey']).then(data => {
        console.log('data: '+data);
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
          console.log('MASUK SINI');
          navigation.replace('LoginPage');
        }
      });
    } catch (error) {
      console.log('ERROR');
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
