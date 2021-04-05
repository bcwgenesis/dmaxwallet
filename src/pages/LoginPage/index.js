import React from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {API} from '../../constants';
import {Button, Text} from '../../uikits';
import {post} from '../../services';
import {getBalance} from '../../utils';

import LoginImage from '../../assets/images/login_image.png';

import styles from './styles';

const LoginPage = ({navigation}) => {
  const createWallet = () => {
    post(API.CREATE_ACCOUNT).then(accountData => {
      if (accountData) {
        AsyncStorage.setItem('privateKey', accountData.newprivkey);
        AsyncStorage.setItem('publicKey', accountData.newpubkey);
        getBalance(
          accountData.newpubkey,
          accountData.newprivkey,
          (pubkey, privkey, balance, bnbBalance) => {
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'HomePage',
                  params: {
                    pubkey,
                    privkey,
                    balance,
                    bnbBalance,
                  },
                },
              ],
            });
          },
        );
      }
    });
  };

  return (
    <SafeAreaView style={styles.main}>
      <Text size={16} weight="bold">
        DMAX WALLET
      </Text>
      <View style={styles.welcomeDescContainer}>
        <Text size={24} weight="bold">
          Welcome to
        </Text>
        <Text size={24} weight="bold">
          Dmax Wallet
        </Text>
      </View>

      <View style={styles.descContainer}>
        <Text size={14} style={styles.desc}>
          Trusted by millions, Dmax Wallet is a secure wallet that makes the
          world of Cryptocurrency accessible to all
        </Text>
      </View>

      <View>
        <Image source={LoginImage} style={styles.image} />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          label="Create Wallet"
          onPress={() => {}}
          labelStyle={styles.buttonLabel}
          style={styles.button}
        />
        <Button
          label="Restore Wallet"
          onPress={() => navigation.navigate('RetrieveKeyPage')}
          labelStyle={styles.buttonLabel}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
