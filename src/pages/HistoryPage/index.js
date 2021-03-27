import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import {HistoryCard} from '../../uikits';

import styles from './styles';

const DUMMY = [
  {
    id: 1,
    from: 'A',
    to: 'B',
    amount: 500,
  },
  {
    id: 2,
    from: 'A',
    to: 'C',
    amount: 700,
  },
];

const HistoryPage = () => {
  return (
    <SafeAreaView style={styles.main}>
      <FlatList
        data={DUMMY}
        keyExtractor={index => index.toString()}
        renderItem={({item}) => (
          <HistoryCard
            sender={item.from}
            recipient={item.to}
            amount={item.amount}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default HistoryPage;
