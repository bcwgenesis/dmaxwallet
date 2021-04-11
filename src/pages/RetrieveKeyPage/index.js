import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {InputAmount, ModalLoader} from '../../uikits';

import {getBalance, showToast} from '../../utils';

import {post} from '../../services';

import {API} from '../../constants';

import styles from './styles';

const RetrieveKeyPage = ({navigation}) => {
  const [privateKey, setPrivateKey] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const getPubKey = () => {
    setIsModalVisible(true);
    post(`${API.GET_PUBLIC_KEY}/${privateKey}`)
      .then(res => {
        if (res.publicKey) {
          getBalance(
            res.publicKey,
            privateKey,
            (pubkey, privkey, balance, bnbBalance) => {
              AsyncStorage.setItem('publicKey', pubkey);
              AsyncStorage.setItem('privateKey', `0x${privkey}`);
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
      })
      .catch(error => {
        setIsModalVisible(false);
        showToast(error);
      });
  };

  useEffect(() => {
    if (privateKey) {
      navigation.setParams({
        isRightDisabled: false,
        onPressRight: () => {
          getPubKey();
        },
      });
    }
  }, [privateKey]);

  return (
    <SafeAreaView style={styles.main}>
      <ModalLoader visible={isModalVisible} label="Processing data ..." />
      <InputAmount
        label="PASTE"
        onPress={async () => {
          const pKey = await Clipboard.getString();
          setPrivateKey(pKey);
        }}
        value={privateKey}
        style={privateKey && styles.value}
        editable
        onChangeText={text => setPrivateKey(text)}
        placeholder="Private Key from back up"
      />
    </SafeAreaView>
  );
};

export default RetrieveKeyPage;
