import React, {useEffect, useState} from 'react';
import {SafeAreaView, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {InputAmount} from '../../uikits';

import {showToast} from '../../utils';

import styles from './styles';

const TransferPage = ({navigation, route}) => {
  const {data} = route.params || {};
  const [transferAmount, setTransferAmount] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');

  useEffect(() => {
    navigation.setParams({
      onPressRight: () => {
        showToast('Transfer success');
        navigation.goBack();
      },
    });
  }, []);

  useEffect(() => {
    if (data) {
      setRecipientAddress(data);
    }
  }, [data]);

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
        onPress={() => Alert.alert('Max Value')}
        editable
        onChangeText={text => setTransferAmount(text)}
        value={transferAmount}
      />
    </SafeAreaView>
  );
};

export default TransferPage;
