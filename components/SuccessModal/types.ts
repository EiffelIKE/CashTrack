export interface Action {
  label?: string;
  onPress?: () => void;
}

export interface SuccessModalProps {
  secondaryAction?: Action;
  primaryAction?: Action;
  visible: boolean;
  onDismiss?: () => void;
  title?: string;
}
