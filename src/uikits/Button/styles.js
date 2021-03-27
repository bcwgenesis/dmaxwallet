import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 1,
    backgroundColor: 'white',
    marginBottom: 8,
    flex: 1,
    borderRadius: 8,
  },
  iconContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  labelContainer: {
    flex: 8,
    paddingLeft: 10,
    justifyContent: 'center',
  },
});

export default styles;
