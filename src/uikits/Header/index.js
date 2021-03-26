import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Header = props => {
  const {onPressLeft, onPressRight, title} = props;

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => onPressLeft()}
        style={styles.leftContainer}>
        <Ionicons name="md-arrow-back-outline" size={24} />
      </TouchableOpacity>
      <View style={styles.centerContainer}>
        <Text>{title}</Text>
      </View>
      {onPressRight ? (
        <TouchableOpacity
          onPress={() => onPressRight()}
          style={styles.rightContainer}>
          <Text>Continue</Text>
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

export default Header;
