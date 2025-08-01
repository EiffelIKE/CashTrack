
import logoDark from '@/assets/images/splash-dark.png';
import logoLight from '@/assets/images/splash-light.png';
import { useThemeContext } from '@/Theme/context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Image } from 'expo-image';
import { View } from 'react-native';
import { Drawer, Switch, Text, TouchableRipple } from 'react-native-paper';

export const DrawerContent = (props: DrawerContentComponentProps) => {
  const { activeTheme, toggleTheme, theme } = useThemeContext();

  const icon = activeTheme === 'dark' ? 'dark-mode' : 'light-mode';
  const logo = activeTheme === 'dark' ? logoDark : logoLight;

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ height: 200, alignItems: 'center', gap: 10 }}>
        <Image
          source={logo}
          style={{ width: 150, height: 150, objectFit: 'contain' }}
        />
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>CashTrack</Text>
      </View>
      <DrawerItemList {...props} />
      <Drawer.Section>
        <View
          style={{
            marginTop: 50,
          }}
        >
          <TouchableRipple onPress={() => toggleTheme()}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 16,
              }}
            >
              <View
                style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}
              >
                <MaterialIcons
                  name={icon}
                  size={32}
                  color={theme.paperTheme.colors.onSurface}
                />
                <Text style={{ color: theme.navigationTheme.colors.text }}>
                  {' '}
                  {`${activeTheme === 'dark' ? 'Dark' : 'Ligth'} Theme`}
                </Text>
              </View>
              <Switch
                value={activeTheme === 'dark'}
                onValueChange={() => toggleTheme()}
              />
            </View>
          </TouchableRipple>
        </View>
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};
