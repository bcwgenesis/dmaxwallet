import {Platform, StyleSheet} from 'react-native';

import {deviceHeight, deviceWidth} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: deviceHeight(),
  },
  zeroContainer: {
    height: 0,
    flex: 0,
  },
  backIconContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 30,
    left: 27,
    zIndex: 2,
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  rectangle: {
    height: deviceWidth() * 0.65,
    width: deviceWidth() * 0.65,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  topOverlay: {
    flex: 1,
    height: deviceWidth(),
    width: deviceWidth(),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomOverlay: {
    flex: 1,
    height: deviceWidth(),
    width: deviceWidth(),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingBottom: deviceWidth() * 0.25,
  },
  leftAndRightOverlay: {
    height: deviceWidth() * 0.65,
    width: deviceWidth(),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  overlayContainer: {
    flexDirection: 'row',
  },
  titleStyle: {
    marginHorizontal: 100,
    textAlign: 'center',
  },
  scanBar: {
    width: deviceWidth() * 0.65,
    height: deviceWidth() * 0.0025,
    backgroundColor: 'white',
  },
});
export default styles;
