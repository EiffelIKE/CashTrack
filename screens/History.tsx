import { useAppNavigation } from '@/hooks/useAppNavigation';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

export function HistoryScreen() {
  const navigation = useAppNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button mode='contained' onPress={() => navigation.navigate('Home')}>
        Go to Home
      </Button>
      <Text>Some text </Text>
    </View>
  );
}