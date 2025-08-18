import { FC } from 'react';
import { Keyboard } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';
import { KeyboardDismissProps } from './types';

export const KeyboardDismiss: FC<KeyboardDismissProps> = ({
  children,
  onPress,
  ...rest
}) => {

  const singleTap = Gesture.Tap()
    .numberOfTaps(1)
    .onEnd(runOnJS(() => {
        if(Keyboard.isVisible()) {
          Keyboard.dismiss();
        }
      if(onPress) {
        onPress()
      }
    })).runOnJS(true);
  return (
    <GestureDetector style={{flex: 1}} gesture={singleTap}
      {...rest}
    >
      {/* <KeyboardAvoidingView style={{flex: 1}}   behavior={isIos ? 'padding' : null}
    enabled > */}
      {children}
      {/* </KeyboardAvoidingView> */}
    </GestureDetector>
  );
};
