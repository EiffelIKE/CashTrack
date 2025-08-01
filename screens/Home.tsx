import { Container } from '@/components/Container';
import { CurrencyFormCard } from '@/components/CurrencyCard';
import { CurrencyCardRef } from '@/components/CurrencyCard/types';
import { DraggableButton } from '@/components/DraggableButton';
import { Text, Title } from '@/components/Text';
import { useActiveCurrencies } from '@/hooks/useActiveCurrencies';
import { useAvailableCurrencies } from '@/hooks/useAvailableCurrencies';
import { usePlatform } from '@/hooks/usePlatform';
import { useThemeContext } from '@/Theme/context';
import { useHeaderHeight } from '@react-navigation/elements';
import { createRef, RefObject, useEffect, useRef } from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const { isIos } = usePlatform();
  const headerHeight = useHeaderHeight();
  const { theme } = useThemeContext();
  const insets = useSafeAreaInsets();
  const refs = useRef<Record<string, RefObject<CurrencyCardRef | null>>>({});

  const curencies = useAvailableCurrencies();
  const { activeCurrencies, deleteActiveCurrency, addNewActiveCurrency } =
    useActiveCurrencies();

  const getTotal = () => {
    const allData: any[] = [];
    activeCurrencies.forEach((currency) => {
      const ref = refs.current[currency.abbreviation];
      if (ref?.current) {
        console.log('no ref');
        //allData.push(ref.current.getData());
        ref.current.clear();
      }
    });
  };

  const clearAll = () => {
    activeCurrencies.forEach((currency) => {
      const ref = refs.current[currency.abbreviation];
      if (ref?.current) {
        console.log('no ref');
        //allData.push(ref.current.getData());
        ref.current.clear();
      }
    });
  };

  useEffect(() => {
    activeCurrencies.forEach((currency) => {
      if (!refs.current[currency.abbreviation]) {
        refs.current[currency.abbreviation] = createRef<CurrencyCardRef>();
      }
    });
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={isIos ? 'padding' : undefined}
        keyboardVerticalOffset={insets.bottom + 24 + headerHeight}
      >
        <Container style={{ gap: 24, position: 'relative' }}>
          <ScrollView
            style={{ height: '100%' }}
            contentContainerStyle={{
              gap: 24,
              paddingTop: 24,
              paddingBottom: insets.bottom + 24,
            }}
            showsVerticalScrollIndicator={false}
          >
            <Title>Select curencies to use:</Title>
            <View style={{ gap: 12 }}>
              {curencies.map((currency) => {
                const { name, abbreviation } = currency;
                const isChecked = activeCurrencies.some(
                  (curr) => curr.abbreviation === abbreviation
                );

                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '50%',
                    }}
                    key={abbreviation}
                  >
                    <Checkbox
                      status={isChecked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        if (isChecked) {
                          deleteActiveCurrency(abbreviation);
                          refs.current[currency.abbreviation] = null;
                        } else {
                          addNewActiveCurrency(currency);
                          refs.current[currency.abbreviation] =
                            createRef<CurrencyCardRef>();
                        }
                      }}
                    />
                    <Text>
                      {name} - {abbreviation}
                    </Text>
                  </View>
                );
              })}
            </View>
            {activeCurrencies.length > 0 ? (
              <View style={{ gap: 24 }}>
                <Title>Track currencies:</Title>
                <View style={{ gap: 32 }}>
                  {activeCurrencies.map((currency, index, arr) => {
                    return (
                      <CurrencyFormCard
                        currency={currency}
                        key={currency.abbreviation}
                        ref={refs.current[currency.abbreviation]}
                      />
                    );
                  })}
                </View>
              </View>
            ) : (
              <Text style={{ color: theme.paperTheme.colors.primary }}>
                * Select at least one currency to track
              </Text>
            )}
          </ScrollView>
        </Container>
      </KeyboardAvoidingView>
      <DraggableButton />
    </>
  );
};
