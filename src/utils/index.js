import {Dimensions, ToastAndroid, PixelRatio, Platform} from 'react-native';
import {API} from '../constants';
import {get} from '../services';

export const deviceWidth = () => Dimensions.get('window').width;
export const deviceHeight = () => Dimensions.get('window').height;

const scale = deviceWidth() / 320;

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
  const returnVal = (val / 1000000000000000000).toFixed(3);
  return returnVal;
};
export const parsePrivateKey = privkey => {
  return privkey.substring(2);
};
export const getFontSize = size => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
export const getBalance = async (pubkey, privkey, onSuccess) => {
  try {
    const response = await get(`${API.GET_BALANCE}/${pubkey}`);
    const responseBnb = await get(`${API.GET_BNB_BALANCE}/${pubkey}`);
    if (response && responseBnb) {
      onSuccess &&
        onSuccess(pubkey, privkey, response?.balance, responseBnb?.result);
    }
  } catch (error) {
    showToast(error);
  }
};
