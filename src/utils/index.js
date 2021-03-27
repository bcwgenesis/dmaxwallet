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
