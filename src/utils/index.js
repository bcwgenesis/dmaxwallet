import {
  Dimensions,
  ToastAndroid,
  PixelRatio,
  Platform,
  AlertIOS,
} from 'react-native';
import LocalAuth from 'react-native-local-auth';
import TouchID from 'react-native-touch-id';

import {API} from '../constants';
import {get} from '../services';

export const deviceWidth = () => Dimensions.get('window').width;
export const deviceHeight = () => Dimensions.get('window').height;

const scale = deviceWidth() / 320;

export const showToast = message => {
  if (Platform.OS === 'android') {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0,
      80,
    );
  }
};
export const parseBalance = val => {
  const returnVal = (val / 1000000000000000000).toFixed(3);
  return returnVal;
};
export const parsePrivateKey = privkey => {
  if (privkey && String(privkey.substring(0, 2)) === '0x') {
    return privkey.substring(2);
  }
  return privkey;
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
export const authenticate = onSuccess => {
  const reason = 'This is a secure area, please authenticate yourself';
  if (Platform.OS === 'android') {
    LocalAuth.authenticate({
      reason,
      fallbackToPasscode: true, // fallback to passcode on cancel
      suppressEnterPassword: true, // disallow Enter Password fallback
    })
      .then(success => {
        onSuccess && onSuccess();
      })
      .catch(error => {
        if (error.code === 'E_FAILED_TO_SHOW_AUTH') {
          onSuccess && onSuccess();
        }
        console.error(JSON.stringify(error));
      });
  } else {
    const optionalConfigObject = {
      fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
      unifiedErrors: false, // use unified error messages (default false)
      passcodeFallback: true, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
    };

    TouchID.authenticate(
      'to demo this react-native component',
      optionalConfigObject,
    )
      .then(success => {
        onSuccess && onSuccess();
      })
      .catch(error => {
        console.error(JSON.stringify(error));
      });
  }
};
