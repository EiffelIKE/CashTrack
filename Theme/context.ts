import { createContext, use } from 'react';
import { darkTheme } from './themes';
import type { ThemeContextKeys } from './types';

const initialTheme: ThemeContextKeys = {
  activeTheme: 'dark',
  theme: darkTheme,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextKeys>(initialTheme);

export const useThemeContext = () => use(ThemeContext)
