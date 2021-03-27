import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 1,
    backgroundColor: 'white',
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 7,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  disabledContinue: {
    color: '#d6dcdd',
  },
  enableContinue: {
    color: 'black',
  },
});

export default styles;
