import {StyleSheet, Platform} from 'react-native';

import Color from '../../styles/color';
import {getFontSize} from '../../utils';

const styles = StyleSheet.create({
  main: {
    elevation: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  inputContainer: {
    flex: 6,
    marginHorizontal: 20,
    marginTop: 10,
    justifyContent: 'center',
    paddingVertical: Platform.OS === 'ios' ? 16 : 0,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  rightContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    fontSize: getFontSize(12),
    marginVertical: 0,
  },
  errorText: {
    fontSize: getFontSize(10),
    color: Color.RED,
    marginLeft: 25,
    marginTop: -12,
  },
  labelFont: {
    fontSize: getFontSize(12),
  },
});

export default styles;
