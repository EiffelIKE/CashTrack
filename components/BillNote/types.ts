import type { StyleProp, ViewStyle } from 'react-native';

export type BillNoteProps = {
  denomination: string;
  backgroundColor?: string;
  secondaryColor?: string;
  containerStyles?: StyleProp<ViewStyle>
  cornerStyles?: StyleProp<ViewStyle>,
  centerStyles?: StyleProp<ViewStyle>
};