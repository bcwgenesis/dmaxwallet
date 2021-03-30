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
          <Text numberOfLines={1}>{sender}</Text>
        </View>
        <View style={styles.exchangeContainer}>
          <Text style={styles.title}>To</Text>
          <Text numberOfLines={1}>{recipient}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.amount}>{parseFloat(amount).toFixed(3)}</Text>
      </View>
    </View>
  );
};

export default HistoryCard;
