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
  accountContainer: {
    elevation: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
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
    padding: 20,
  },
  historyCard: {
    elevation: 1,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 20,
  },
  title: {
    fontWeight: 'bold',
  },
  propsContainer: {
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  buttonSeparator: {
    flex: 0.1,
  },
  row: {
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {
    flex: 9,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  addressContainer: {
    flex: 7,
    justifyContent: 'center',
  },
  copyButtonContainer: {
    flex: 3,
    paddingLeft: 8,
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: '#a4b0b3',
  },
});
export default styles;
