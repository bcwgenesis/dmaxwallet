import React from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';

import {Text} from '../../uikits';

import Color from '../../styles/color';
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
    keyboardType,
    onPressIcon,
    isError,
    errorMessage,
  } = props;

  const inputContainerStyle = () => {
    if (!editable && value) {
      return {
        ...styles.inputContainer,
        paddingVertical: 14,
      };
    }
    return styles.inputContainer;
  };

  return (
    <>
      <View style={styles.main}>
        <View style={inputContainerStyle()}>
          {!editable && value ? (
            <Text numberOfLines={1} style={styles.value}>
              {value}
            </Text>
          ) : (
            <TextInput
              editable={editable}
              placeholder={placeholder}
              value={value}
              onChangeText={text => {
                editable && onChangeText(text);
              }}
              style={style}
              keyboardType={keyboardType}
              placeholderTextColor={Color.SUVA_GREY}
            />
          )}
        </View>

        {icon ? (
          <TouchableOpacity onPress={onPressIcon} style={styles.iconContainer}>
            {icon}
          </TouchableOpacity>
        ) : (
          <View />
        )}

        <TouchableOpacity onPress={onPress} style={styles.rightContainer}>
          <Text style={styles.labelFont}>{label}</Text>
        </TouchableOpacity>
      </View>
      {isError ? (
        <View>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      ) : (
        <View />
      )}
    </>
  );
};

InputAmount.defaultProps = {
  placeholder: 'Recipient Address',
  editable: false,
  value: '',
  isError: false,
  errorMessage: '',
};

export default InputAmount;
