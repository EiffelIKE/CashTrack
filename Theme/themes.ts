import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { MD2DarkTheme, MD2LightTheme } from 'react-native-paper';
import type { Theme } from './types';

const PaperLightTheme: typeof MD2LightTheme = {
  ...MD2LightTheme,
  colors: {
    ...MD2LightTheme.colors,
    primary: '#034b3d',
    accent: '#006D77',
  },
  fonts: {
    ...MD2LightTheme.fonts,
    regular: {
      ...MD2LightTheme.fonts.regular,
      fontFamily: 'InterRegular',
    },
    medium: {
      ...MD2LightTheme.fonts.medium,
      fontFamily: 'InterMedium',  
    },
    thin: {
      ...MD2LightTheme.fonts.thin,
      fontFamily: 'InterThin',  
    },
    light: {
      ...MD2LightTheme.fonts.light,
      fontFamily: 'InterLight',
    }
  }
}

const PaperDarkTheme: typeof MD2DarkTheme = {
 ...MD2DarkTheme,
 colors: {
   ...MD2DarkTheme.colors,
   primary: '#83C5BE',
   accent: '#83C5BE',
 },
 fonts: {
   ...MD2DarkTheme.fonts,
   regular: {
     ...MD2DarkTheme.fonts.regular,
     fontFamily: 'InterRegular',
   },
   light: {
     ...MD2DarkTheme.fonts.light,
     fontFamily: 'InterLight',
   },
   medium: {
     ...MD2DarkTheme.fonts.medium,
     fontFamily: 'InterMedium',  
   },
   thin: {
     ...MD2DarkTheme.fonts.thin,
     fontFamily: 'InterThin',  
   }
 }
}

const NavigationLightTheme: typeof DefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#0F262E"
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      ...DefaultTheme.fonts.regular,
      fontFamily: 'InterRegular',
    },
    medium: {
      ...DefaultTheme.fonts.medium,
      fontFamily: 'InterMedium',  
    },
    bold: {
      ...DefaultTheme.fonts.bold,
      fontFamily: 'InterBold',  
    },
    heavy: {
      ...DefaultTheme.fonts.heavy,
      fontFamily: 'InterBold',  
    }
  }
}

const NavigationDarkTheme: typeof DarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#83C5BE",
    card: "#15212b",
    background: "#040f10",
  },
  fonts: {
    ...DarkTheme.fonts,
    regular: {
      ...DarkTheme.fonts.regular,
      fontFamily: 'InterRegular',
    },
    medium: {
      ...DarkTheme.fonts.medium,
      fontFamily: 'InterMedium',  
    },
    bold: {
      ...DarkTheme.fonts.bold,
      fontFamily: 'InterBold',  
    },
    heavy: {
      ...DarkTheme.fonts.heavy,
      fontFamily: 'InterBold',  
    }
  }
}

export const darkTheme: Theme = {
  paperTheme: PaperDarkTheme,
  navigationTheme: NavigationDarkTheme,
  barStyle: '#15212b',
  buttons: '#375166',
};

export const ligthTheme: Theme = {
  paperTheme: PaperLightTheme,
  navigationTheme: NavigationLightTheme,
  barStyle: '#ffffff',
  buttons: '#8697a5',
};
