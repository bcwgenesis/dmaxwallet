import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {InputAmount} from '../../uikits';

import {showToast} from '../../utils';

import {API} from '../../constants';

import {post} from '../../services';

import styles from './styles';

const TransferPage = ({navigation, route}) => {
  const {data} = route.params || {};
  const [transferAmount, setTransferAmount] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');

  const transfer = () => {
    const params = {
      to: recipientAddress,
      amount: transferAmount,
    };
    post(API.TRANSFER, params)
      .then(response => {
        showToast('Transfer success');
        navigation.goBack();
      })
      .catch(error => {
        showToast(error);
      });
  };

  useEffect(() => {
    if (data) {
      setRecipientAddress(data);
    }
  }, [data]);

  useEffect(() => {
    if (transferAmount && recipientAddress) {
      navigation.setParams({
        isRightDisabled: false,
        onPressRight: () => transfer(),
      });
    }
  }, [transferAmount, recipientAddress]);

  return (
    <SafeAreaView style={styles.main}>
      <InputAmount
        label="SCAN"
        onPress={() => navigation.navigate('ScanQRPage')}
        icon={<Ionicons name="md-scan-outline" size={20} />}
        value={recipientAddress}
        style={recipientAddress && styles.value}
      />
      <InputAmount
        label="MAX"
        placeholder="Amount TDMAX"
        onPress={() => setTransferAmount('1000000')}
        editable
        onChangeText={text => setTransferAmount(text)}
        value={transferAmount}
        keyboardType={'numeric'}
      />
    </SafeAreaView>
  );
};

export default TransferPage;
