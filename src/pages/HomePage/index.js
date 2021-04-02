import React, {useState} from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Clipboard from '@react-native-clipboard/clipboard';
import QRCode from 'react-native-qrcode-svg';

import {API} from '../../constants';

import {Button} from '../../uikits';

import {deviceWidth, showToast, parseBalance} from '../../utils';

import {get} from '../../services';

import styles from './styles';

import ImageLogo from '../../assets/images/img_logo.png';

const HomePage = ({navigation, route}) => {
  const {balance, pubkey, privkey, bnbBalance} = route?.params || {};

  const [isRefresh, setIsRefresh] = useState(false);
  const [dmaxBalance, setDmaxBalance] = useState(balance);
  const [balanceBnb, setBalanceBnb] = useState(bnbBalance);
  const [isPrivateKeyHidden, setIsPrivateKeyHidden] = useState(true);

  const refreshData = async () => {
    setIsRefresh(true);
    try {
      const response = await get(`${API.GET_BALANCE}/${pubkey}`);
      const responseBnb = await get(`${API.GET_BNB_BALANCE}/${pubkey}`);

      if (response && responseBnb) {
        setDmaxBalance(response?.balance);
        setBalanceBnb(responseBnb?.result);
      }
      setIsRefresh(false);
    } catch (error) {
      setIsRefresh(false);
      showToast(error);
    }
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefresh} onRefresh={refreshData} />
      }
      showsVerticalScrollIndicator={false}
      style={styles.main}>
      <Image source={ImageLogo} style={styles.logo} />
      <View style={styles.accountContainer}>
        <View style={styles.row}>
          <View style={styles.flex1}>
            <Text style={styles.title}>DMAX Balance</Text>
            <Text style={styles.dmaxBalanceFont}>
              {dmaxBalance && parseFloat(dmaxBalance).toFixed(3)}
            </Text>
          </View>
          <View style={styles.bnbBalanceContainer}>
            <Text style={styles.title}>BNB Balance</Text>
            <Text style={styles.bnbBalanceFont}>
              {parseBalance(balanceBnb)}
            </Text>
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
                labelStyle={styles.copyText}
              />
            </View>
          </View>
        </View>

        <View style={styles.propsContainer}>
          <View style={styles.row}>
            {isPrivateKeyHidden ? (
              <View style={styles.hiddenContent}>
                <Text style={styles.hiddenText}>Private Key</Text>
              </View>
            ) : (
              <View style={styles.addressContainer}>
                <Text numberOfLines={1} style={styles.showText}>
                  {privkey}
                </Text>
              </View>
            )}

            <View style={styles.copyButtonContainer}>
              <Button
                label={isPrivateKeyHidden ? 'Show' : 'Copy'}
                onPress={() => {
                  if (isPrivateKeyHidden) {
                    setIsPrivateKeyHidden(false);
                  } else {
                    Clipboard.setString(privkey);
                    showToast('Copied to clipboard!');
                  }
                }}
                style={styles.buttonStyle}
                labelStyle={styles.copyText}
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
              balanceBnb,
            })
          }
          icon={<Ionicons name="md-cash-outline" size={20} />}
          style={styles.topUpTransferButtonContainer}
          labelStyle={styles.buttonLabel}
        />
        <View style={styles.buttonSeparator} />
        <Button
          label="Transfer"
          onPress={() =>
            navigation.navigate('TransferPage', {
              pubkey,
              privkey,
              dmaxBalance,
              balanceBnb,
            })
          }
          icon={<Ionicons name="md-send-outline" size={20} />}
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
            <Ionicons name="md-receipt-outline" size={20} />
          </View>
          <View style={styles.labelContainer}>
            <Text>History</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HomePage;
