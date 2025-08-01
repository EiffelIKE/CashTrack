import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  billRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 8,
    position: 'relative',
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    width: 90,
    alignItems: 'center',
  },
  input: {
    position: 'absolute',
    zIndex: 20,
    width: '100%',
    marginHorizontal: 8,
  },
  errorText: {
    position: 'absolute',
    bottom: -20,
    fontSize: 10,
  },
});
