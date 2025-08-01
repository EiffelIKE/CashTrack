import { BillNote } from '@/components/BillNote';
import { Container } from '@/components/Container';
import { Text, Title } from '@/components/Text';
import { BILL_COLORS } from '@/constants/billColors';
import { useAvailableCurrencies } from '@/hooks/useAvailableCurrencies';
import { useThemeContext } from '@/Theme/context';
import { Currency } from '@/types/currency';
import { useState } from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import { Checkbox, Divider } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const {theme} = useThemeContext();
  const insets = useSafeAreaInsets();
  const curencies = useAvailableCurrencies();
  const [selectedCurrencies, setSelectedCurrencies] = useState<Currency[]>([]);

  return (
    <Container style={{gap: 24, position: 'relative'}} >    
      <ScrollView style={{height: '100%'}} contentContainerStyle={{gap: 24, paddingBottom: insets.bottom }} >
      <Title>Select curencies to use:</Title>
        <View style={{ gap: 12 }} >
        {curencies.map(currency => {
          const { name, abbreviation } = currency;
          const isChecked = selectedCurrencies.some(curr => curr.abbreviation === abbreviation);

          return (
            <View style={{flexDirection: 'row', alignItems: 'center',width: '50%'}}  key={abbreviation}>
              <Checkbox status={isChecked ? 'checked' : 'unchecked'} onPress={() => {
                if (isChecked) {
                  setSelectedCurrencies(prev => prev.filter(currency => currency.abbreviation !== abbreviation))
                } else {
                  setSelectedCurrencies(prev => [...prev, currency])
                }
              }} />
              <Text>{name} - {abbreviation}</Text>
            </View>
          )
        })}
        </View>
        {selectedCurrencies.length > 0 ? (
          <View style={{gap: 24}} >
            <Title>Track currencies:</Title>
            <View style={{gap: 32}} >
              {selectedCurrencies.map((currency, index, arr) => {
                const { name, abbreviation, denominations } = currency;
                return (
                  <View key={abbreviation} style={{gap:8}} >
                    <Text key={abbreviation}>{name} - {abbreviation}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                      <Text>Denominations Amount:</Text>
                      <Text>Total</Text>
                    </View>
                    <View style={{gap: 8}} >
                      {denominations.map((denomination, index) => {
                        const billIndex = index > 10 ? index % 10 : index;
                        const backgroundColor = BILL_COLORS[billIndex || 0];
                        return <View key={denomination} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
                          <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}} >
                            <BillNote denomination={denomination} backgroundColor={backgroundColor} /> 
                            <Text style={{fontWeight: 'bold'}} >x</Text>
                            <View style={{flexDirection: 'row', gap: 8, position: 'relative',borderRadius: 8, borderWidth: 1, borderColor: theme.paperTheme.colors.onSurface, height: 40, width: 90, alignItems: 'center', }} >
                              <TextInput keyboardType='number-pad' numberOfLines={1} style={{color: theme.paperTheme.colors.onSurface, position: 'absolute', zIndex: 20, width: '100%', marginHorizontal: 8}} value={String(denomination)} />
                            </View>
                          </View>
                          <Text>{denomination}</Text>
                        </View>
                      })}
                    </View>
                    {index !== arr.length - 1 && <Divider style={{height: 2}} />}
                  </View>
                )
              })}
            </View>
          </View>
        ) : (
          <Text style={{color: theme.paperTheme.colors.primary}} >* Select at least one currency to track</Text>
        )}
      </ScrollView>
      {/* {selectedCurrencies.length > 0 && (
        <View style={{position: 'absolute', bottom: insets.bottom + 24, left: 0, right: 0, paddingHorizontal: 16}} >
          <Button mode='contained' style={{paddingVertical: 8}} >
          Save 
        </Button>
        </View>
      )} */}
    </Container>
  );
}