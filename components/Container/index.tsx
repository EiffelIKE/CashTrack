import { View, ViewProps } from 'react-native';
import { styles } from './styles';

export const Container = (props: ViewProps) => {
  const { style, ...rest } = props

  return (
    <View {...rest} style={[styles.container, style]} />
  )
}
