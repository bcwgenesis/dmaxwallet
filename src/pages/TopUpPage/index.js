import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';

import {InputAmount} from '../../uikits';

import {showToast} from '../../utils';

import {CONTRACT_ADDRESS, API} from '../../constants';

import styles from './styles';
import {post} from '../../services';

const TopUpPage = ({navigation, route}) => {
  const {pubkey, privkey} = route?.params || {};
  const [topUpAmount, setTopUpAmount] = useState('');

  const topUp = () => {
    const params = {
      publicKey: pubkey,
      privateKey: privkey,
      amount: topUpAmount,
      contractAddress: CONTRACT_ADDRESS,
    };
    post(API.TOP_UP, params)
      .then(responseData => {
        showToast('Top up success');
        navigation.goBack();
      })
      .catch(error => {
        showToast(error?.message || 'Something went wrong');
      });
  };

  useEffect(() => {
    navigation.setParams({
      onPressRight: () => {
        topUp();
      },
    });
  }, []);

  useEffect(() => {
    if (topUpAmount) {
      navigation.setParams({
        isRightDisabled: false,
      });
    }
  }, [topUpAmount]);

  return (
    <SafeAreaView style={styles.main}>
      <InputAmount value={CONTRACT_ADDRESS} style={styles.value} />
      <InputAmount
        label="MAX"
        placeholder="Amount TDMAX"
        onPress={() => setTopUpAmount('1000000')}
        editable
        onChangeText={text => setTopUpAmount(text)}
        value={topUpAmount}
        keyboardType={'numeric'}
      />
    </SafeAreaView>
  );
};

export default TopUpPage;
