import type { KeyboardAvoidingViewProps } from 'react-native';

export type KeyboardAvoidProps = Omit<
  KeyboardAvoidingViewProps,
  'behavior' | 'keyboardVerticalOffset' | 'enabled'
>;
