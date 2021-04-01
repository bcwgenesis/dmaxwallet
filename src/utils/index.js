import {Dimensions, ToastAndroid} from 'react-native';

export const deviceWidth = () => Dimensions.get('window').width;
export const deviceHeight = () => Dimensions.get('window').height;
export const showToast = message => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
    0,
    80,
  );
};
export const parseBalance = val => {
  return parseFloat(Number(val) / 1000000000000000000).toFixed(3);
};
