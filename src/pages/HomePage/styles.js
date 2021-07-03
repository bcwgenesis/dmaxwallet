import {StyleSheet, Platform} from 'react-native';

import {deviceWidth, getFontSize} from '../../utils';

import Color from '../../styles/color';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Color.BLACK_PRIMARY,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 8,
    marginTop: 3,
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
    color: Color.BLACK_PRIMARY,
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
    flex: 6,
    justifyContent: 'center',
  },
  copyButtonContainer: {
    flex: 4,
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
    fontSize: getFontSize(12),
  },
  qrContainer: {
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 12,
  },
  qrTitle: {
    marginBottom: 20,
    fontSize: getFontSize(14),
    fontWeight: 'bold',
    color: Color.BLACK_PRIMARY,
  },
  flex1: {
    flex: 1,
  },
  bnbBalanceContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  bnbBalanceFont: {
    fontSize: getFontSize(32),
    color: Color.TURBO,
    fontWeight: 'bold',
  },
  dmaxBalanceFont: {
    fontSize: getFontSize(32),
    color: Color.BLACK_PRIMARY,
    fontWeight: 'bold',
  },
  privKeyTitle: {
    fontWeight: 'bold',
    color: Color.BLACK_PRIMARY,
    marginBottom: -5,
  },
  copyText: {
    textAlign: 'center',
    fontSize: getFontSize(12),
    marginLeft: Platform.OS === 'ios' ? -14 : 0,
  },
  hiddenContent: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.GAINSBORO,
    flex: 6,
  },
  hiddenText: {
    fontWeight: 'bold',
    color: Color.WHITE,
  },
  showText: {
    color: Color.BLACK,
  },
  warningText: {
    fontSize: getFontSize(10),
    color: 'red',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: Platform.OS === 'ios' ? 0 : -4,
    marginBottom: 20,
  },
});
export default styles;
