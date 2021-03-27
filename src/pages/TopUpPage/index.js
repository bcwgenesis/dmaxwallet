import React, {useState, useEffect} from 'react';
import {Alert, SafeAreaView} from 'react-native';

import {InputAmount} from '../../uikits';

import {showToast} from '../../utils';

import styles from './styles';

const TopUpPage = ({navigation}) => {
  const [topUpAmount, setTopUpAmount] = useState('');

  useEffect(() => {
    navigation.setParams({
      onPressRight: () => {
        showToast('Top up success');
        navigation.goBack();
      },
    });
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <InputAmount value="DMAX contract address" style={styles.value} />
      <InputAmount
        label="MAX"
        placeholder="Amount TDMAX"
        onPress={() => Alert.alert('Max Value')}
        editable
        onChangeText={text => setTopUpAmount(text)}
        value={topUpAmount}
      />
    </SafeAreaView>
  );
};

export default TopUpPage;
