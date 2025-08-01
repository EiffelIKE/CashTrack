import type { StyleProp, ViewStyle } from 'react-native';

export type BillNoteProps = {
  denomination: number;
  backgroundColor?: string;
  secondaryColor?: string;
  containerStyles?: StyleProp<ViewStyle>
  cornerStyles?: StyleProp<ViewStyle>,
  centerStyles?: StyleProp<ViewStyle>
};