import { SmallText } from '@/components/Text';
import { generateTextFromActiveCurrencies } from '@/utils/generateTextFromActiveCurrencies';
import { parseAmount } from '@/utils/parseAmount';
import { FC } from 'react';
import { View } from 'react-native';
import { IconButton, Surface } from 'react-native-paper';
import { TrackDetailsProps } from './types';

export const TrackDetails: FC<TrackDetailsProps> = ({
  id,
  modificationDate,
  activeCurrencies,
  handleClone,
  deleteHisotry,
  handleShare,
}) => {
  const date = modificationDate ? new Date(modificationDate) : new Date();
  const formattedDate = date.toLocaleDateString('en', {
    day: '2-digit',
    month: 'short',
    year: '2-digit',
    hour12: true,
    minute: '2-digit',
  });
  return (
    <Surface
      elevation={3}
      style={{
        justifyContent: 'center',
        padding: 12,
        borderWidth: 1,
        borderRadius: 12,
        gap: 24,
      }}
    >
      <SmallText>Currencies:</SmallText>
      <View style={{ gap: 6 }}>
        {activeCurrencies?.map((currency) => {
          const { name, abbreviation, denominations } = currency;
          const amount = denominations.reduce(
            (acc, curr) => acc + Number(curr.count) * Number(curr.amount),
            0
          );
          return (
            <View
              key={abbreviation}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <SmallText>
                {name} - {abbreviation}
                {'    '}
              </SmallText>
              <SmallText>
                Total: {parseAmount({ amount, currency: abbreviation })}
              </SmallText>
            </View>
          );
        })}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <SmallText>Date: {formattedDate}</SmallText>
        <View style={{ flexDirection: 'row', gap: 4 }}>
          <IconButton
            icon={'content-copy'}
            onPress={() => handleClone?.(activeCurrencies)}
          />
          <IconButton onPress={deleteHisotry} icon={'delete'} />
          <IconButton
            onPress={() =>
              handleShare?.(generateTextFromActiveCurrencies(activeCurrencies))
            }
            icon={'share'}
          />
        </View>
      </View>
    </Surface>
  );
};
