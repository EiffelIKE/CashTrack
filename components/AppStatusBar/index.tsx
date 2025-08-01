import Constants from 'expo-constants';
import { StatusBar, StatusBarProps } from 'expo-status-bar';
import { FC } from 'react';
import { View } from 'react-native';

export const AppStatusBar: FC<StatusBarProps> = (props) => {
  const { backgroundColor, ...rest } = props
  const height = Constants.statusBarHeight;
  return (
    <>
      <StatusBar {...rest} />
      <View style={{ backgroundColor, height }} />
    </>
  );
};