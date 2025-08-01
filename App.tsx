import { DrawerNavigator } from '@/navigation/DrawerNavigator';
import Providers from '@/providers/Providers';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



const App = () => {
  const [loaded] = useFonts({
    InterRegular: require('./assets/fonts/Inter/static/Inter-Regular.ttf'),
    InterBold: require('./assets/fonts/Inter/static/Inter-Bold.ttf'),
    InterLight: require('./assets/fonts/Inter/static/Inter-Light.ttf'),
    InterMedium: require('./assets/fonts/Inter/static/Inter-Medium.ttf'),
    InterThin: require('./assets/fonts/Inter/static/Inter-Thin.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{flex: 1}} >
        <Providers>
          <DrawerNavigator />
        </Providers>
        </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
