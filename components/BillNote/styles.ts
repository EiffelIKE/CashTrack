import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 35,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    position: 'relative',
    overflow: 'visible',
    borderWidth: 4,
  },
  oval: {
    width: 8,
    height: 8,
    position: 'absolute',
  },
  topLeft: { top: 0, left: 0 },
  topRight: { top: 0, right: 0 },
  bottomLeft: { bottom: 0, left: 0 },
  bottomRight: { bottom: 0, right: 0 },
  centerCircle: {
    width: 25,
    height: 25,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 10,
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  denominationText: {
    fontSize: 18,
    fontWeight: 'bold',
    zIndex: 20,
  },
});