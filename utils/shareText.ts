import { Share } from 'react-native';

//ToDo --- Manage share result

export async function shareText(text: string) {
  try {
    const result = await Share.share({
      message: text,
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.log('Compartido con tipo:', result.activityType);
      } else {
        
      }
    } else if (result.action === Share.dismissedAction) {

    }
  } catch (error) {
    console.error('Error al compartir:', error);
  }
}