import React from 'react';
import {Text as TextNative} from 'react-native';

import {getFontSize} from '../../utils';

import styles from './styles';

const Text = props => {
  const {
    children,
    size,
    weight,
    fontStyle,
    color,
    style,
    numberOfLines,
  } = props;

  let textStyle = styles.main;

  if (size) {
    textStyle = {
      ...textStyle,
      fontSize: getFontSize(size),
    };
  }

  if (weight) {
    textStyle = {
      ...textStyle,
      fontWeight: weight,
    };
  }

  if (weight) {
    textStyle = {
      ...textStyle,
      fontStyle,
    };
  }

  if (color) {
    textStyle = {
      ...textStyle,
      color,
    };
  }

  return (
    <TextNative style={[textStyle, style]} numberOfLines={numberOfLines}>
      {children}
    </TextNative>
  );
};

Text.defaultProps = {
  size: getFontSize(12),
};

export default Text;
