import { Denomination } from '@/types/currency'
import { StyleProp, ViewStyle } from 'react-native'

export type DenominationListProps = {
  denominations?: Denomination[], 
  containerStyles?: StyleProp<ViewStyle>
}