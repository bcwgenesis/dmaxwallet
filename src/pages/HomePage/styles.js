import {StyleSheet} from 'react-native';

import {deviceWidth} from '../../utils';

import Color from '../../styles/color';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Color.FREE_SPEECH_BLUE,
  },
  logo: {
    width: deviceWidth() - 40,
    height: deviceWidth() / 10,
    resizeMode: 'contain',
    marginTop: 30,
    marginBottom: 10,
    alignSelf: 'center',
  },
  accountContainer: {
    elevation: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    marginHorizontal: 20,
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
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    color: Color.FREE_SPEECH_BLUE,
  },
  propsContainer: {
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
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
    justifyContent: 'flex-end',
  },
  buttonStyle: {
    paddingVertical: 8,
    borderColor: 'grey',
    borderWidth: 0.5,
    alignItems: 'center',
  },
  topUpTransferButtonContainer: {
    flex: 1,
  },
  buttonLabel: {
    fontSize: 12,
  },
  qrContainer: {
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 12,
  },
  qrTitle: {
    marginBottom: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: Color.FREE_SPEECH_BLUE,
  },
  flex1: {
    flex: 1,
  },
  bnbBalanceContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  bnbBalanceFont: {
    fontSize: 32,
    color: Color.TURBO,
    fontWeight: 'bold',
  },
  dmaxBalanceFont: {
    fontSize: 32,
    color: Color.FREE_SPEECH_BLUE,
    fontWeight: 'bold',
  },
  privKeyTitle: {
    fontWeight: 'bold',
    color: Color.FREE_SPEECH_BLUE,
    marginBottom: -5,
  },
  copyText: {
    textAlign: 'center',
  },
  hiddenContent: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.GAINSBORO,
    flex: 7,
  },
  hiddenText: {
    fontWeight: 'bold',
    color: Color.WHITE,
  },
  showText: {
    color: Color.BLACK,
  },
});
export default styles;
