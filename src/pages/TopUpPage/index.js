import React, {useState} from 'react';
import {View, Alert} from 'react-native';

import {InputAmount} from '../../uikits';

import styles from './styles';

const TopUpPage = () => {
  const [topUpAmount, setTopUpAmount] = useState('');

  return (
    <View style={styles.main}>
      <InputAmount value="DMAX contract address" style={styles.value} />
      <InputAmount
        label="MAX"
        placeholder="Amount TDMAX"
        onPress={() => Alert.alert('Max Value')}
        editable
        onChangeText={text => setTopUpAmount(text)}
        value={topUpAmount}
      />
    </View>
  );
};

export default TopUpPage;
