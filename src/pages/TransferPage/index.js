import React, {useEffect, useState} from 'react';
import {View, Alert, ToastAndroid} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {InputAmount} from '../../uikits';

import styles from './styles';

const TransferPage = ({navigation}) => {
  const [transferAmount, setTransferAmount] = useState('');

  useEffect(() => {
    navigation.setParams({
      onPressRight: () => {
        ToastAndroid.showWithGravityAndOffset(
          'Transfer success',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          0,
          80,
        );
        navigation.goBack();
      },
    });
  }, []);

  return (
    <View style={styles.main}>
      <InputAmount
        label="SCAN"
        onPress={() => Alert.alert('Open Scanner')}
        icon={<Ionicons name="md-scan-outline" size={20} />}
      />
      <InputAmount
        label="MAX"
        placeholder="Amount TDMAX"
        onPress={() => Alert.alert('Max Value')}
        editable
        onChangeText={text => setTransferAmount(text)}
        value={transferAmount}
      />
    </View>
  );
};

export default TransferPage;
