import { BillNote } from '@/components/BillNote';
import { useThemeContext } from '@/Theme/context';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

const BILL_COLORS = [
  '#F9E79F', // Amarillo suave
  '#AED6F1', // Azul cielo
  '#A9DFBF', // Verde suave
  '#F5B7B1', // Rosa claro
  '#D7BDE2', // Lila pastel
  '#FAD7A0', // Naranja claro
  '#A3E4D7', // Verde-agua
  '#F1948A', // Coral
  '#BB8FCE', // Lavanda
  '#FDEBD0', // Beige cálido
];

export function HomeScreen() {
  const { toggleTheme} = useThemeContext();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button mode='contained' onPress={toggleTheme}>
        Go to notifications
      </Button>

      {BILL_COLORS.map((color, index) => (
        <BillNote key={index} denomination={1000} backgroundColor={color} />
      ))}
    </View>
  );
}