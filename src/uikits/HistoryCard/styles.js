import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 1,
    backgroundColor: 'white',
    marginBottom: 8,
  },
  leftContainer: {
    flex: 6,
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 18,
  },
  exchangeContainer: {
    marginBottom: 10,
  },
});

export default styles;
