import { AppStatusBar } from '@/components/AppStatusBar';
import { withStore } from '@/store/withStore';
import { useThemeContext } from '@/Theme/context';
import { withTheme } from '@/Theme/withTheme';
import { NavigationContainer } from '@react-navigation/native';
import type { ReactNode } from 'react';
import { PaperProvider } from 'react-native-paper';

const Providers = ({ children }: { children: ReactNode }) => {
  const { theme, activeTheme } = useThemeContext();
  return (
    <NavigationContainer theme={theme.navigationTheme}>
      <AppStatusBar
        style={activeTheme === 'dark' ? 'light' : 'dark'}
        backgroundColor={theme.barStyle}
      />
      <PaperProvider theme={theme.paperTheme}>{children}</PaperProvider>
    </NavigationContainer>
  );
};

export default withStore(withTheme(Providers));
