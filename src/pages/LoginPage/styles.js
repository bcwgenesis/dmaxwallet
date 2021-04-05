import {StyleSheet} from 'react-native';

import {deviceWidth, deviceHeight} from '../../utils';
import Color from '../../styles/color';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.WHITE,
  },
  welcomeDescContainer: {
    marginTop: 32,
    marginBottom: 24,
    alignItems: 'center',
  },
  descContainer: {
    marginHorizontal: 40,
  },
  desc: {
    textAlign: 'center',
    color: Color.SUVA_GREY,
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
    fontWeight: 'bold',
    color: Color.FREE_SPEECH_BLUE,
  },
  image: {
    width: deviceWidth() - 130,
    height: deviceHeight() / 3,
    resizeMode: 'contain',
    marginTop: 16,
  },
});

export default styles;
