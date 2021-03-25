import {StyleSheet} from 'react-native';

import {deviceWidth} from '../../utils';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logo: {
    width: deviceWidth() - 40,
    height: deviceWidth() / 10,
    resizeMode: 'contain',
  },
  cardContainer: {
    elevation: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 20,
  },
  cardContent: {
    flex: 1,
    padding: 10,
  },
  historyCard: {
    elevation: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 20,
  },
});
export default styles;
