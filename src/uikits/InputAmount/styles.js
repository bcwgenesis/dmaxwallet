import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    elevation: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  inputContainer: {
    flex: 7,
    marginHorizontal: 20,
    marginTop: 10,
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    marginVertical: 14,
  },
});

export default styles;
