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
  const [isRefresh, setIsRefresh] = useState(false);

  const getHistory = () => {
    get(`${API.GET_HISTORY}/${pubkey}`)
      .then(responseData => {
        setHistoryData(responseData?.result);
        setIsLoading(false);
        setIsRefresh(false);
      })
      .catch(error => {
        setIsLoading(false);
        setIsRefresh(false);
        showToast(error?.message || 'Something went wrong');
      });
  };

  useEffect(() => {
    getHistory();
  }, []);

  const refreshData = () => {
    setIsRefresh(true);
    getHistory();
  };

  return (
    <SafeAreaView style={styles.main}>
      {isLoading ? (
        <View style={styles.emptyContainer}>
          <ActivityIndicator size="large" color={Color.WHITE} />
        </View>
      ) : historyData.length ? (
        <FlatList
          data={historyData}
          refreshing={isRefresh}
          onRefresh={refreshData}
          keyExtractor={index => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <HistoryCard
              sender={item.from}
              recipient={item.to}
              amount={item.value / 1000000000000000000}
              pubkey={pubkey}
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
