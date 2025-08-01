import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    gap: 24,
    padding: 24,
    borderRadius: 12,
    borderWidth: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    width: '90%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  denominationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
