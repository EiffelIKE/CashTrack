import { useThemeContext } from '@/Theme/context';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export const RefreshIcon = ({ onPress }: { onPress: () => void }) => {
  const { theme } = useThemeContext();
  return (
    <TouchableOpacity hitSlop={40} onPress={onPress}>
      <FontAwesome
        name="refresh"
        size={18}
        color={theme.paperTheme.colors.onSurface}
      />
    </TouchableOpacity>
  );
};
