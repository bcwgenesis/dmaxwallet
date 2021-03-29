import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-clipboard/clipboard';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Button} from '../../uikits';

import {deviceWidth, showToast} from '../../utils';

import styles from './styles';

const ReceivePage = ({route}) => {
  const {pubkey} = route?.params || '';

  return (
    <SafeAreaView style={styles.main}>
      <QRCode value={pubkey} size={deviceWidth() - 200} />
      <Text style={styles.text}>{pubkey}</Text>
      <Button
        label="Copy"
        onPress={() => {
          Clipboard.setString(pubkey);
          showToast('Copied to clipboard!');
        }}
        style={styles.buttonStyle}
        icon={<Ionicons name="md-copy-outline" size={24} />}
      />
    </SafeAreaView>
  );
};

export default ReceivePage;
