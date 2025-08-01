import { FontAwesome6 } from '@expo/vector-icons';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Surface } from 'react-native-paper';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export const DraggableButton = ({
  onPress,
  isDraggable = true,
}: {
  onPress: ({ x, y }: { x: number; y: number }) => void;
  isDraggable: boolean;
}) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height - 200; // Altura arbitraria de zona visible

  const BUTTON_SIZE = 80;
  const MARGIN = 20;

  const initialX = screenWidth - BUTTON_SIZE - MARGIN;
  const initialY = MARGIN;

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

  const draggableComponent = (
    <Animated.View style={[styles.button, animatedStyle]}>
      <Surface
        elevation={3}
        style={{
          borderRadius: 45,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          backgroundColor: '#034b3d',
        }}
      >
        <TouchableOpacity
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          hitSlop={40}
          onPress={() => {
            const x =
              translateX.value > screenWidth / 2
                ? translateX.value
                : translateX.value + BUTTON_SIZE;
            const y =
              translateY.value ;
            onPress({x, y});
          }}
        >
          <FontAwesome6 name="edit" size={28} color={'white'} />
        </TouchableOpacity>
      </Surface>
    </Animated.View>
  );

  if (!isDraggable) {
    return draggableComponent;
  }

  return (
    <GestureDetector gesture={dragGesture}>
      {draggableComponent}
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,

    position: 'absolute',
  },
});
