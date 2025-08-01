import { BillNote } from '@/components/BillNote';
import { BILL_COLORS } from '@/constants/billColors';
import { FC } from 'react';
import { View } from 'react-native';
import { DenominationListProps } from './types';

export const DenominationList: FC<DenominationListProps> = ({
  denominations,
  containerStyles,
}) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          gap: 6,
          flexWrap: 'wrap',
        },
        containerStyles,
      ]}
    >
      {denominations?.map((denomination, index) => {
        const billIndex = index > 10 ? index % 10 : index;
        const backgroundColor = BILL_COLORS[billIndex || 0];
        return (
          <View key={denomination.id} style={{ width: '20%', alignItems: 'center' }}>
            <BillNote denomination={denomination.amount} backgroundColor={backgroundColor} />
          </View>
        );
      })}
    </View>
  );
};
