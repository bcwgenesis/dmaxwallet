import React, {useEffect} from 'react';
import {SafeAreaView, Image} from 'react-native';

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

  const createAccount = async () => {
    try {
      const accountData = await post(API.CREATE_ACCOUNT);
      if (accountData) {
        getBalance(accountData.newpubkey);
      }
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
