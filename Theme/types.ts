import type { Theme as NavigationTheme } from '@react-navigation/native';
import { ColorSchemeName } from 'react-native';
import { MD2Theme, MD3Theme } from 'react-native-paper';

export interface Theme {
  paperTheme: MD2Theme | MD3Theme;
  navigationTheme: NavigationTheme;
  barStyle: string;
  buttons: string;
}

export interface ThemeContextKeys {
  activeTheme: ColorSchemeName;
  theme: Theme;
  toggleTheme: () => void;
}
