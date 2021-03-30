import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

import {HistoryCard} from '../../uikits';

import {get} from '../../services';

import {API} from '../../constants';

import styles from './styles';
import Color from '../../styles/color';

import {showToast} from '../../utils';

const HistoryPage = ({route}) => {
  const {pubkey} = route?.params || '';

  const [isLoading, setIsLoading] = useState(true);
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    get(`${API.GET_HISTORY}/${pubkey}`)
      .then(responseData => {
        setHistoryData(responseData?.result);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        showToast(error?.message || 'Something went wrong');
      });
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      {isLoading ? (
        <View style={styles.emptyContainer}>
          <ActivityIndicator size="large" color={Color.FREE_SPEECH_BLUE} />
        </View>
      ) : historyData.length ? (
        <FlatList
          data={historyData}
          keyExtractor={index => index.toString()}
          renderItem={({item}) => (
            <HistoryCard
              sender={item.from}
              recipient={item.to}
              amount={item.value / 1000000000000000000}
            />
          )}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text>No transactions found</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default HistoryPage;
