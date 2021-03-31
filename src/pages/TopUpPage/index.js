import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';

import {InputAmount, ModalLoader} from '../../uikits';

import {showToast} from '../../utils';

import {CONTRACT_ADDRESS, API} from '../../constants';

import styles from './styles';
import {post} from '../../services';

const TopUpPage = ({navigation, route}) => {
  const {pubkey, privkey} = route?.params || {};
  const [topUpAmount, setTopUpAmount] = useState('');
  const [requestTopUp, setRequestTopUp] = useState(false);

  const topUp = () => {
    setRequestTopUp(true);
    const params = {
      publicKey: pubkey,
      privateKey: privkey,
      amount: topUpAmount,
      contractAddress: CONTRACT_ADDRESS,
    };

    post(API.TOP_UP, params)
      .then(responseData => {
        setRequestTopUp(false);
        showToast('Top up success');
        navigation.goBack();
      })
      .catch(error => {
        setRequestTopUp(false);
        showToast(error?.message || 'Something went wrong');
      });
  };

  useEffect(() => {
    if (topUpAmount) {
      navigation.setParams({
        isRightDisabled: false,
        onPressRight: () => {
          topUp();
        },
      });
    }
  }, [topUpAmount]);

  return (
    <SafeAreaView style={styles.main}>
      <ModalLoader visible={requestTopUp} />
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
