import { BillNote } from '@/components/BillNote';
import { SmallText, Text } from '@/components/Text';
import { BILL_COLORS } from '@/constants/billColors';
import { useThemeContext } from '@/Theme/context';
import { isValidDenCount } from '@/utils/isValidDenCount';
import { parseAmount } from '@/utils/parseAmount';
import { FC, memo } from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './styles';
import { DenominationRowProps } from './types';

const DenominationRowForm: FC<DenominationRowProps> = ({
  denominationAmount,
  abbreviation,
  value,
  onChange,
  index,
}) => {
  const { theme } = useThemeContext();
  const billIndex = index > 10 ? index % 10 : index;
  const backgroundColor = BILL_COLORS[billIndex || 0];

  const onValueChange = (text: string) => {
    if (text.length <= 6) {
      onChange?.(text);
    }
  };

  const isValidCount = isValidDenCount({ count: Number(value) });

  const total = isValidCount ? Number(denominationAmount) * Number(value) : 0;

  return (
    <View style={styles.container}>
      <View style={styles.billRow}>
        <BillNote
          denomination={denominationAmount}
          backgroundColor={backgroundColor}
        />
        <Text style={{ fontWeight: 'bold' }}>x</Text>
        <View
          style={[
            styles.inputContainer,
            {
              borderColor: isValidCount
                ? theme.paperTheme.colors.onSurface
                : theme.paperTheme.colors.error,
            },
          ]}
        >
          <TextInput
            keyboardType="number-pad"
            numberOfLines={1}
            style={[
              styles.input,
              {
                color: theme.paperTheme.colors.onSurface,
              },
            ]}
            value={value ? String(value) : undefined}
            onChangeText={onValueChange}
          />
          {!isValidCount && (
            <SmallText
              style={[
                styles.errorText,
                { color: theme.paperTheme.colors.error },
              ]}
            >
              {'Must be a number less than 1,000,000'}
            </SmallText>
          )}
        </View>
      </View>
      <Text>
        {parseAmount({ amount: total, currency: abbreviation })}
      </Text>
    </View>
  );
};

export const DenominationRow = memo(DenominationRowForm);
