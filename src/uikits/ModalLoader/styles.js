import {StyleSheet} from 'react-native';

import Color from '../../styles/color';

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: Color.BLACK_30,
    justifyContent: 'center',
  },
  loadingLabel: {
    marginTop: 20,
    color: Color.WHITE,
    textAlign: 'center',
  },
});

export default styles;
