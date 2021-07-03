import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {get} from '../../services';

import {InputAmount, ModalLoader} from '../../uikits';

import {
  showToast,
  parseBalance,
  parsePrivateKey,
  authenticate,
} from '../../utils';

import {CONTRACT_ADDRESS, API} from '../../constants';

import styles from './styles';
import {post} from '../../services';

const TopUpPage = ({navigation, route}) => {
  const {pubkey, privkey, balanceBnb} = route?.params || {};
  const [topUpAmount, setTopUpAmount] = useState('');
  const [requestTopUp, setRequestTopUp] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const topUp = () => {
    setRequestTopUp(true);
    const params = {
      publicKey: pubkey,
      privateKey: parsePrivateKey(privkey),
      amount: topUpAmount,
      contractAddress: CONTRACT_ADDRESS,
    };

    // post(API.TOP_UP, params)
    //   .then(async responseData => {
    //     const response = await get(`${API.GET_BALANCE}/${pubkey}`);
    //     const responseBnb = await get(`${API.GET_BNB_BALANCE}/${pubkey}`);
    //     setRequestTopUp(false);
    //     showToast('Top up success');
    //     navigation.navigate('HomePage', {
    //       balance: response?.balance,
    //       bnbBalance: responseBnb?.result,
    //     });
    //   })
    //   .catch(error => {
    //     setRequestTopUp(false);
    //     showToast(error?.message || 'Something went wrong');
    //   });
    //   })
    setRequestTopUp(false);
    showToast('Top up success');
    navigation.navigate('HomePage', {
      balance: '20',
      bnbBalance: '20',
    });
  };

  useEffect(() => {
    if (topUpAmount) {
      navigation.setParams({
        isRightDisabled: false,
        onPressRight: () => {
          if (isAmountValid()) {
            authenticate(topUp);
          }
        },
      });
    }
  }, [topUpAmount]);

  const isAmountValid = () => {
    if (
      parseFloat(topUpAmount) > 0 &&
      parseFloat(topUpAmount) <= parseBalance(balanceBnb) - 0.0007
    ) {
      return true;
    } else {
      setIsError(true);
      setErrorMessage('Amount is not valid');
      return false;
    }
  };

  return (
    <View style={styles.main}>
      <ModalLoader visible={requestTopUp} />
      <InputAmount value={CONTRACT_ADDRESS} style={styles.value} />
      <InputAmount
        label="MAX"
        placeholder="Amount BNB"
        onPress={() => setTopUpAmount(parseBalance(balanceBnb - 0.0007))}
        editable
        onChangeText={text => {
          if (isError) {
            setIsError(false);
            setErrorMessage('');
          }
          setTopUpAmount(text);
        }}
        value={topUpAmount}
        keyboardType={'numeric'}
        isError={isError}
        errorMessage={errorMessage}
      />
    </View>
  );
};

export default TopUpPage;
