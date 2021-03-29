import React, {useEffect} from 'react';
import {SafeAreaView, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {API} from '../../constants';

import {post, get} from '../../services';

import {showToast} from '../../utils';

import styles from './styles';

import ImageLogo from '../../assets/images/img_logo.png';

const SplashPage = ({navigation}) => {
  const getBalance = async pubkey => {
    try {
      const response = await get(`${API.GET_BALANCE}/${pubkey}`);
      if (response) {
        navigation.navigate('HomePage', {
          pubkey,
          balance: response.balance,
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
          getBalance(data[1][1]);
        } else {
          post(API.CREATE_ACCOUNT).then(accountData => {
            if (accountData) {
              AsyncStorage.setItem('privateKey', accountData.newprivkey);
              AsyncStorage.setItem('publicKey', accountData.newpubkey);
              getBalance(accountData.newpubkey);
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
      <Image source={ImageLogo} style={styles.logo} />
    </SafeAreaView>
  );
};

export default SplashPage;
