import React, {useEffect} from 'react';
import {SafeAreaView, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {API} from '../../constants';

import {post, get} from '../../services';

import {showToast} from '../../utils';

import styles from './styles';

import AndroidSplash from '../../assets/images/splash_android_screen.png';

const SplashPage = ({navigation}) => {
  const getBalance = async (pubkey, privkey) => {
    try {
      const response = await get(`${API.GET_BALANCE}/${pubkey}`);
      const responseBnb = await get(`${API.GET_BNB_BALANCE}/${pubkey}`);
      if (response && responseBnb) {
        navigation.replace('HomePage', {
          pubkey,
          privkey,
          balance: response?.balance,
          bnbBalance: responseBnb?.result,
        });
      }
    } catch (error) {
      showToast(error);
    }
  };

  const createAccount = () => {
    try {
      AsyncStorage.multiGet(['privateKey', 'publicKey']).then(data => {
        if (data[0][1] && data[1][1]) {
          getBalance(data[1][1], data[0][1]);
        } else {
          post(API.CREATE_ACCOUNT).then(accountData => {
            if (accountData) {
              AsyncStorage.setItem('privateKey', accountData.newprivkey);
              AsyncStorage.setItem('publicKey', accountData.newpubkey);
              getBalance(accountData.newpubkey, accountData.newprivkey);
            }
          });
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
