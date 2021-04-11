import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';

import Text from '../Text';

import styles from './styles';

const Header = props => {
  const {onPressLeft, onPressRight, title, isRightDisabled} = props;

  return (
    <SafeAreaView style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => onPressLeft()}
        style={styles.leftContainer}>
        <Ionicons name="md-arrow-back-outline" size={24} />
      </TouchableOpacity>
      <View style={styles.centerContainer}>
        <Text style={styles.headerFont}>{title}</Text>
      </View>
      {onPressRight ? (
        <TouchableOpacity
          activeOpacity={isRightDisabled ? 1 : 0.5}
          onPress={() => !isRightDisabled && onPressRight()}
          style={styles.rightContainer}>
          <Text
            style={
              isRightDisabled ? styles.disabledContinue : styles.enableContinue
            }>
            Continue
          </Text>
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </SafeAreaView>
  );
};

Header.defaultProps = {
  isRightDisabled: true,
};

export default Header;
