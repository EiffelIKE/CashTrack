import { DenominationRow } from '@/components/DenominationRow';
import { RefreshIcon } from '@/components/RefreshIcon';
import { Text } from '@/components/Text';
import { useThemeContext } from '@/Theme/context';
import { Denomination } from '@/types/currency';
import { isValidDenCount } from '@/utils/isValidDenCount';
import { parseAmount } from '@/utils/parseAmount';
import { FC, useImperativeHandle, useState } from 'react';
import { View } from 'react-native';
import { Divider, Surface } from 'react-native-paper';
import { styles } from './styles';
import { CurrencyCardProps, CurrencyCardRef } from './types';

export const CurrencyFormCard: FC<CurrencyCardProps> = ({ ref, currency }) => {
  const { theme } = useThemeContext();
  const [currencyState, setCurrencyState] = useState<
    Record<Denomination['amount'], string>
  >(
    currency.denominations.reduce(
      (acc, denomination) => {
        acc[denomination.amount] = denomination.count;
        return acc;
      },
      {} as Record<Denomination['amount'], string>
    )
  );

  const { name, abbreviation, denominations } = currency;

  const total = Object.keys(currencyState).reduce((acc, den) => {
    if(isValidDenCount({ count: Number(currencyState[den]) })) {
      return acc + Number(currencyState[den]) * Number(den);
    } 
    return acc;
  }, 0);

  const refreshCardState = () => {
    setCurrencyState(
      currency.denominations.reduce(
        (acc, denomination) => {
          acc[denomination.amount] = '0';
          return acc;
        },
        {} as Record<Denomination['amount'], string>
      )
    );
  };

  useImperativeHandle<null, CurrencyCardRef | null>(ref, () => ({
    getData: () => ({
      currencyState,
      abbreviation,
      total
    }
    ),
    clear: refreshCardState,
  }));

  return (
    <Surface
      style={[
        styles.container,
        {
          borderColor: theme.paperTheme.colors.onSurface,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Text key={abbreviation} style={styles.title} numberOfLines={2}>
          {name} - {abbreviation}
        </Text>
        <RefreshIcon onPress={refreshCardState} />
      </View>
      <View style={styles.denominationContainer}>
        <Text>Denominations Amount:</Text>
        <Text>Total</Text>
      </View>
      <Divider style={{ height: 2 }} />
      <View style={{ gap: 12 }}>
        {denominations.map((denomination, index) => {
          return (
            <DenominationRow
              key={denomination.id}
              denominationAmount={denomination.amount}
              index={index}
              abbreviation={abbreviation}
              value={currencyState?.[denomination.amount]}
              onChange={(value) => {
                setCurrencyState((prev) => ({
                  ...prev,
                  [denomination.amount]: value,
                }));
              }}
            />
          );
        })}
      </View>
      <Divider style={{ height: 2 }} />
      <View style={styles.totalContainer}>
        <Text>Total: </Text>
        <Text>
          {parseAmount({ amount: total, currency: abbreviation })}
        </Text>
      </View>
    </Surface>
  );
};
