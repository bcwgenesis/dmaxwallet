import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const HistoryCard = props => {
  const {sender, recipient, amount} = props;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftContainer}>
        <View style={styles.exchangeContainer}>
          <Text style={styles.title}>From</Text>
          <Text>{sender}</Text>
        </View>
        <View style={styles.exchangeContainer}>
          <Text style={styles.title}>To</Text>
          <Text>{recipient}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </View>
  );
};

export default HistoryCard;
