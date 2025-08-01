import type { DrawerScreenProps } from '@react-navigation/drawer';

export type RootDrawerScreensProps = {
  Home: undefined,
  History: undefined,
  Currencies: undefined
}

export type Props = DrawerScreenProps<RootDrawerScreensProps>;
export type Screen = keyof RootDrawerScreensProps;
