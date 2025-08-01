import { useThemeContext } from '@/Theme/context';
import { Dimensions, StyleSheet } from 'react-native';
import {
  Gesture,
  GestureDetector
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated';

export const DraggableButton = () => {
  const { theme } = useThemeContext();
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height - 200; // Altura arbitraria de zona visible

  const BUTTON_SIZE = 90;
  const MARGIN = 20;

  const initialX = screenWidth - BUTTON_SIZE - MARGIN;
  const initialY = screenHeight - BUTTON_SIZE - MARGIN;

  const translateX = useSharedValue(initialX);
  const translateY = useSharedValue(initialY);
  const offsetX = useSharedValue(initialX);
  const offsetY = useSharedValue(initialY);

  const dragGesture = Gesture.Pan()
    .onUpdate((event) => {
      let newX = offsetX.value + event.translationX;
      let newY = offsetY.value + event.translationY;

      const minX = MARGIN;
      const maxX = screenWidth - BUTTON_SIZE - MARGIN;
      const minY = MARGIN;
      const maxY = screenHeight - BUTTON_SIZE - MARGIN;

      translateX.value = Math.min(Math.max(newX, minX), maxX);
      translateY.value = Math.min(Math.max(newY, minY), maxY);
    })
    .onEnd(() => {
      offsetX.value = translateX.value;
      offsetY.value = translateY.value;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));


  return (
    <GestureDetector gesture={dragGesture}>
    <Animated.View style={[styles.button, animatedStyle, {backgroundColor: theme.paperTheme.colors.primary, borderColor: theme.paperTheme.colors.onSurface}]} />
  </GestureDetector>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    position: 'absolute',
  },
});
