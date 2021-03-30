import React from 'react';
import {SafeAreaView, Text, Image, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Clipboard from '@react-native-clipboard/clipboard';
import QRCode from 'react-native-qrcode-svg';

import {Button} from '../../uikits';

import {deviceWidth, showToast} from '../../utils';

import styles from './styles';

import ImageLogo from '../../assets/images/img_logo.png';
import {ScrollView} from 'react-native-gesture-handler';

const HomePage = ({navigation, route}) => {
  const {balance, pubkey, privkey} = route?.params || {};

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <Image source={ImageLogo} style={styles.logo} />
        <View style={styles.accountContainer}>
          <View style={styles.row}>
            <View style={styles.flex1}>
              <Text style={styles.title}>DMAX Balance</Text>
              <Text style={styles.dmaxBalanceFont}>{balance}</Text>
            </View>
            <View style={styles.bnbBalanceContainer}>
              <Text style={styles.title}>BNB Balance</Text>
              <Text style={styles.bnbBalanceFont}>{balance}</Text>
            </View>
          </View>

          <View style={styles.qrContainer}>
            <Text style={styles.qrTitle}>BSC Wallet Address</Text>
            <QRCode value={pubkey} size={deviceWidth() - 200} />
          </View>

          <View style={styles.propsContainer}>
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
            onPress={() =>
              navigation.navigate('TopUpPage', {
                pubkey,
                privkey,
              })
            }
            icon={<Ionicons name="md-cash-outline" size={24} />}
            style={styles.topUpTransferButtonContainer}
            labelStyle={styles.buttonLabel}
          />
          <View style={styles.buttonSeparator} />
          <Button
            label="Transfer"
            onPress={() => navigation.navigate('TransferPage')}
            icon={<Ionicons name="md-send-outline" size={24} />}
            style={styles.topUpTransferButtonContainer}
            labelStyle={styles.buttonLabel}
          />
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('HistoryPage', {
              pubkey,
            })
          }
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
