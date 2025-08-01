import { ComponentType, FC } from 'react';
import { ThemeProvider } from './Theme';

export const withTheme = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const WithTheme: FC<P> = (props) => {
    return (
      <ThemeProvider>
        <WrappedComponent {...props} />
      </ThemeProvider>
    );
  };
  return WithTheme;
};
