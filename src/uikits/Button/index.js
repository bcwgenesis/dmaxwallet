import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import fonts from '../../styles/fonts';

import Text from '../Text';

import styles from './styles';

const Button = props => {
  const {icon, label, onPress, style, labelContainerStyle, labelStyle} = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.main, style]}>
      {icon ? <View style={styles.iconContainer}>{icon}</View> : <View />}

      <View style={[styles.labelContainer, labelContainerStyle]}>
        <Text family={fonts['Comfortaa-SemiBold']} style={labelStyle}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
