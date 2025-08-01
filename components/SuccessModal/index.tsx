import { Text } from '@/components/Text';
import { useThemeContext } from '@/Theme/context';
import { FontAwesome5 } from '@expo/vector-icons';
import { FC } from 'react';
import { Button, Modal, Portal } from 'react-native-paper';
import { SuccessModalProps } from './types';

export const SuccessModal: FC<SuccessModalProps> = ({
  secondaryAction,
  visible,
  onDismiss,
  primaryAction,
  title
}) => {
  const { theme } = useThemeContext();
  return (
    <Portal>
      <Modal
        visible={visible}
        dismissable
        onDismiss={onDismiss}
        contentContainerStyle={{
          padding: 24,
          backgroundColor: theme.paperTheme.colors.background,
          marginHorizontal: 24,
          borderRadius: 12,
          gap: 24,
        }}
      >
        <FontAwesome5
          name="check-circle"
          size={62}
          color={theme.paperTheme.colors.primary}
          style={{ textAlign: 'center' }}
        />
        {title && <Text style={{ textAlign: 'center' }}>{title}</Text>}

        {Boolean(
          secondaryAction && secondaryAction?.onPress && secondaryAction.label
        ) && (
          <Button
            mode="outlined"
            style={{ paddingVertical: 10 }}
            onPress={() => {
              secondaryAction?.onPress?.();
            }}
          >
            {secondaryAction?.label}
          </Button>
        )}
        {Boolean(
          primaryAction && primaryAction?.onPress && primaryAction.label
        ) && (
          <Button
            mode="contained"
            style={{ paddingVertical: 10 }}
            onPress={() => {
              primaryAction?.onPress?.();
            }}
          >
            {primaryAction?.label}
          </Button>
        )}
      </Modal>
    </Portal>
  );
};
