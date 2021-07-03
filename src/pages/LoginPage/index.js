import React, {useState} from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {API} from '../../constants';
import {Button, Text, ModalLoader} from '../../uikits';
import {post} from '../../services';
import {getBalance} from '../../utils';

import LoginImage from '../../assets/images/img_logo.png';

import styles from './styles';
import fonts from '../../styles/fonts';
import color from '../../styles/color';

const LoginPage = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const createWallet = () => {
    setIsModalVisible(true);
    post(API.CREATE_ACCOUNT).then(accountData => {
      if (accountData) {
        AsyncStorage.setItem('privateKey', accountData.newprivkey);
        AsyncStorage.setItem('publicKey', accountData.newpubkey);
        getBalance(
          accountData.newpubkey,
          accountData.newprivkey,
          (pubkey, privkey, balance, bnbBalance) => {
            setIsModalVisible(false);
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
      <ModalLoader visible={isModalVisible} label="Requesting data ..." />
      {/* <Text color={color.WHITE} size={16} family={fonts['Comfortaa-Bold']}>
        xSGD WALLET
      </Text> */}
      <View style={styles.welcomeDescContainer}>
        <Text color={color.WHITE} size={24} family={fonts['Comfortaa-Bold']}>
          Welcome to
        </Text>
        <Text color={color.WHITE} size={24} family={fonts['Comfortaa-Bold']}>
          xSGD Wallet
        </Text>
      </View>

      <View style={styles.descContainer}>
        <Text
          color={color.WHITE}
          size={14}
          style={styles.desc}
          family={fonts['Comfortaa-Medium']}>
          Trusted by millions, xSGD Wallet is a secure wallet that makes the
          world of Cryptocurrency accessible to all
        </Text>
      </View>

      <View>
        <Image source={LoginImage} style={styles.image} />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          label="Create Wallet"
          onPress={createWallet}
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
