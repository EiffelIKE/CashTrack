import { useColorScheme } from '@/hooks/useColorScheme';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHooks';
import { selectActiveTheme, setTheme } from '@/store/slices/ThemeSlice';
import { FC, ReactNode, useMemo } from 'react';
import { ThemeContext } from './context';
import { darkTheme, ligthTheme } from './themes';

interface ThemeProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProps> = ({ children }) => {
  const colorScheme = useColorScheme();
  const dispatch = useAppDispatch();
  const activeTheme = useAppSelector(selectActiveTheme)

  const value = useMemo(
    () => ({
      activeTheme:  activeTheme || colorScheme,
      theme: activeTheme === 'dark' ? darkTheme : ligthTheme,
      toggleTheme: () => {
        dispatch(setTheme(activeTheme === 'dark' ? 'light' : 'dark'));
      },
    }),
    [colorScheme, activeTheme, dispatch]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
