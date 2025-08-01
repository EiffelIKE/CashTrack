import { Platform } from 'react-native';

export const usePlatform = () => {
  const platForm = Platform.OS;

  return { isIos: platForm === 'ios', isAndroid: platForm === 'android' };
};
