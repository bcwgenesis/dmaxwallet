import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Clipboard from '@react-native-clipboard/clipboard';

import {InputAmount, ModalLoader} from '../../uikits';

import {showToast, parseBalance, parsePrivateKey} from '../../utils';

import {API} from '../../constants';

import {post} from '../../services';

import styles from './styles';

const TransferPage = ({navigation, route}) => {
  const {data, dmaxBalance, balanceBnb, pubkey, privkey} = route.params || {};
  const [transferAmount, setTransferAmount] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [requestTransfer, setRequestTransfer] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const transfer = () => {
    setRequestTransfer(true);
    const params = {
      to: recipientAddress,
      amount: transferAmount,
      from: pubkey,
      privateKey: parsePrivateKey(privkey),
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
        onPressRight: () => {
          if (isAmountValid()) {
            transfer();
          }
        },
      });
    }
  }, [transferAmount, recipientAddress]);

  const isAmountValid = () => {
    if (
      parseFloat(transferAmount) > 0 &&
      parseFloat(transferAmount) <= dmaxBalance &&
      parseBalance(balanceBnb) > 0
    ) {
      return true;
    } else {
      setIsError(true);
      setErrorMessage('Amount is not valid');
      return false;
    }
  };

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
        editable
        onChangeText={text => setRecipientAddress(text)}
      />
      <InputAmount
        label="MAX"
        placeholder="Amount TDMAX"
        onPress={() => setTransferAmount(dmaxBalance)}
        editable
        onChangeText={text => setTransferAmount(text)}
        value={transferAmount}
        keyboardType={'numeric'}
        isError={isError}
        errorMessage={errorMessage}
      />
    </SafeAreaView>
  );
};

export default TransferPage;
