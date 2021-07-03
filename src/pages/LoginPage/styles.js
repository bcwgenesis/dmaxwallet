import {StyleSheet} from 'react-native';

import {deviceWidth, deviceHeight} from '../../utils';
import Color from '../../styles/color';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.BLACK_PRIMARY,
  },
  welcomeDescContainer: {
    marginTop: 32,
    marginBottom: 20,
    alignItems: 'center',
  },
  descContainer: {
    marginHorizontal: 40,
  },
  desc: {
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 8,
    width: deviceWidth() - 120,
  },
  button: {
    borderWidth: 1,
    borderColor: Color.GAINSBORO,
  },
  buttonLabel: {
    textAlign: 'center',
    color: Color.BLACK_PRIMARY,
  },
  image: {
    width: deviceWidth() - 130,
    height: deviceHeight() / 3,
    resizeMode: 'contain',
    marginVertical: 16,
  },
});

export default styles;
