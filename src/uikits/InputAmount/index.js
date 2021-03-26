import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import styles from './styles';

const InputAmount = props => {
  const {
    onPress,
    icon,
    label,
    placeholder,
    style,
    editable,
    value,
    onChangeText,
  } = props;

  return (
    <View style={styles.main}>
      <View style={styles.inputContainer}>
        <TextInput
          editable={editable}
          placeholder={placeholder}
          value={value}
          onChangeText={text => {
            editable && onChangeText(text);
          }}
          style={style}
        />
      </View>

      {icon ? (
        <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
          {icon}
        </TouchableOpacity>
      ) : (
        <View />
      )}

      <TouchableOpacity onPress={onPress} style={styles.rightContainer}>
        <Text>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

InputAmount.defaultProps = {
  placeholder: 'Recipient Address',
  editable: false,
  value: '',
};

export default InputAmount;
