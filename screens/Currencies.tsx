import { Container } from '@/components/Container';
import { DenominationList } from '@/components/DenominationList';
import { Text, Title } from '@/components/Text';
import { useAvailableCurrencies } from '@/hooks/useAvailableCurrencies';
import { ScrollView, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function CurrenciesScreen() {
  const currencies = useAvailableCurrencies();
  const insets = useSafeAreaInsets();

  return (
    <Container style={{ gap: 24 }}>
      <Title>Available currencies</Title>
      <ScrollView
        style={{ height: '100%' }}
        contentContainerStyle={{ gap: 24, paddingBottom: insets.bottom }}
      >
        {currencies.map((currencie, index, arr) => {
          const { name, abbreviation, denominations } = currencie;
          return (
            <View key={abbreviation} style={{ gap: 16 }}>
              <Text
                style={{
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  width: '100%',
                }}
              >
                {name} - {abbreviation}
              </Text>
              <Text>Denominations:</Text>
              <DenominationList denominations={denominations} />
              {index !== arr.length - 1 && <Divider style={{ height: 2 }} />}
            </View>
          );
        })}
      </ScrollView>
    </Container>
  );
}
