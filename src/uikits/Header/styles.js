import {StyleSheet, Platform} from 'react-native';

import {getFontSize} from '../../utils';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    height: Platform.OS === 'ios' ? 70 : 88,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 6,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 4,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  disabledContinue: {
    fontSize: getFontSize(14),
    color: '#d6dcdd',
  },
  enableContinue: {
    fontSize: getFontSize(14),
    color: 'black',
  },
  headerFont: {
    fontSize: getFontSize(14),
  },
});

export default styles;
