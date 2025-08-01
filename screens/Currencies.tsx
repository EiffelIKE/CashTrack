import { Container } from '@/components/Container';
import { useAppSelector } from '@/hooks/useReduxHooks';
import { selectAvailableCurrencies } from '@/store/slices/CurrencySlice';
import { Text } from 'react-native-paper';

export function CurrenciesScreen() {
  const currencies = useAppSelector(selectAvailableCurrencies)

  return (
    <Container>
      <Text style={{ fontSize: 21 }} >Available currencies</Text>
    </Container>
  );
}