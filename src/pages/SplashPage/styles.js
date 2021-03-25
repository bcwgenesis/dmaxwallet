import {StyleSheet} from 'react-native';

import {deviceWidth} from '../../utils';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: deviceWidth() - 40,
    height: deviceWidth() / 6,
    resizeMode: 'contain',
  },
});
export default styles;
