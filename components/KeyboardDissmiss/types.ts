import type { TouchableWithoutFeedbackProps } from 'react-native'

export interface KeyboardDismissProps extends Omit<TouchableWithoutFeedbackProps, 'onPress'> {
  onPress?: () => void
}