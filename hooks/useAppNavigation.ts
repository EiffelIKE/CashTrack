import { Props } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';

export const useAppNavigation = () => useNavigation<Props['navigation']>()