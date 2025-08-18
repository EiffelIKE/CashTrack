import { usePlatform } from '@/hooks/usePlatform';
import { useHeaderHeight } from '@react-navigation/elements';
import { FC, useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import { KeyboardAvoidProps } from './types';

export const KeyboardAvoidView: FC<KeyboardAvoidProps> = ({
  children,
  ...rest
}) => {
  const headerHeight = useHeaderHeight();
  const {isAndroid} = usePlatform()

  const [behaviour, setBehaviour] = useState<'height' | undefined>('height');
  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => {
      setBehaviour('height');
    });
    const hideListener = Keyboard.addListener('keyboardDidHide', () => {
      setBehaviour(undefined);
    });

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      keyboardVerticalOffset={headerHeight}
      behavior={isAndroid ? behaviour : 'padding'}
      {...rest}
    >
      {children}
    </KeyboardAvoidingView>
  );
};
