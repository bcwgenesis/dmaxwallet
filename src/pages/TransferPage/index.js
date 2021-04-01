import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Clipboard from '@react-native-clipboard/clipboard';

import {InputAmount, ModalLoader} from '../../uikits';

import {showToast, parseBalance} from '../../utils';

import {API} from '../../constants';

import {post} from '../../services';

import styles from './styles';

const TransferPage = ({navigation, route}) => {
  const {data, dmaxBalance, balanceBnb, pubkey, privkey} = route.params || {};
  const [transferAmount, setTransferAmount] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [requestTransfer, setRequestTransfer] = useState(false);

  const transfer = () => {
    setRequestTransfer(true);
    const params = {
      to: recipientAddress,
      amount: transferAmount,
      from: pubkey,
      privateKey: privkey.substring(2),
    };

    post(API.TRANSFER, params)
      .then(response => {
        setRequestTransfer(false);
        showToast('Transfer success');
        navigation.goBack();
      })
      .catch(error => {
        setRequestTransfer(false);
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
      <ModalLoader visible={requestTransfer} />
      <InputAmount
        label="PASTE"
        onPress={async () => {
          const recAddress = await Clipboard.getString();
          setRecipientAddress(recAddress);
        }}
        onPressIcon={() => navigation.navigate('ScanQRPage')}
        icon={<Ionicons name="md-scan-outline" size={20} />}
        value={recipientAddress}
        style={recipientAddress && styles.value}
      />
      <InputAmount
        label="MAX"
        placeholder="Amount TDMAX"
        onPress={() => setTransferAmount(parseBalance(dmaxBalance))}
        editable
        onChangeText={text => setTransferAmount(text)}
        value={transferAmount}
        keyboardType={'numeric'}
      />
    </SafeAreaView>
  );
};

export default TransferPage;
