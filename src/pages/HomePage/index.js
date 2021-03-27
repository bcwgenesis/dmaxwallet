import React from 'react';
import {SafeAreaView, Text, Image, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Clipboard from '@react-native-clipboard/clipboard';

import {Button} from '../../uikits';

import {showToast} from '../../utils';

import styles from './styles';

import ImageLogo from '../../assets/images/img_logo.png';

const HomePage = ({navigation, route}) => {
  const {balance, pubkey} = route?.params || {};

  return (
    <SafeAreaView style={styles.main}>
      <Image source={ImageLogo} style={styles.logo} />
      <View style={styles.accountContainer}>
        <View style={styles.propsContainer}>
          <Text style={styles.title}>Balance</Text>
          <Text>{balance}</Text>
        </View>
        <View style={styles.propsContainer}>
          <View>
            <Text style={styles.title}>Address</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.addressContainer}>
              <Text numberOfLines={1}>{pubkey}</Text>
            </View>
            <View style={styles.copyButtonContainer}>
              <Button
                label="Copy"
                onPress={() => {
                  Clipboard.setString(pubkey);
                  showToast('Copied to clipboard!');
                }}
                style={styles.buttonStyle}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          label="Top Up"
          onPress={() => navigation.navigate('TopUpPage')}
          icon={<Ionicons name="md-cash-outline" size={24} />}
          style={styles.topUpTransferButtonContainer}
        />
        <View style={styles.buttonSeparator} />
        <Button
          label="Transfer"
          onPress={() => navigation.navigate('TransferPage')}
          icon={<Ionicons name="md-send-outline" size={24} />}
          style={styles.topUpTransferButtonContainer}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('HistoryPage')}
        style={styles.historyCard}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <Ionicons name="md-receipt-outline" size={24} />
          </View>
          <View style={styles.labelContainer}>
            <Text>History</Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomePage;
