import { FC } from 'react';
import { Text as PaperText, TextProps } from 'react-native-paper';

export const Title: FC<TextProps<never>> = (props) => {
  const { style, ...rest } = props;
  return <PaperText {...rest} style={[{ fontSize: 21 }, style]} />;
};

export const SmallText: FC<TextProps<never>> = (props) => {
  const { style, ...rest } = props;
  return <PaperText {...rest} style={[{ fontSize: 12 }, style]} />;
};

export const Text: FC<TextProps<never>> = (props) => {
  const { style, ...rest } = props;
  return <PaperText {...rest} style={[{ fontSize: 16 }, style]} />;
};
