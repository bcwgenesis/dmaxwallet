import React from 'react';
import {SafeAreaView, Text, Image, View, TouchableOpacity} from 'react-native';

import styles from './styles';

import ImageLogo from '../../assets/images/img_logo.png';

const HomePage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <Image source={ImageLogo} style={styles.logo} />
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Text>Balance</Text>
          <Text>Rp 10.000.000,-</Text>
        </View>
        <View style={styles.cardContent}>
          <Text>Address</Text>
          <Text>dajhdjashdkjasjhd</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TopUpPage')}
          style={styles.cardContent}>
          <Text>Top Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TransferPage')}
          style={styles.cardContent}>
          <Text>Transfer</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('HistoryPage')}
        style={styles.historyCard}>
        <Text>History</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomePage;
