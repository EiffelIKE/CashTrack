import { shadeColor } from '@/utils/shadeColor';
import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from './styles';
import { BillNoteProps } from './types';

export const BillNote: FC<BillNoteProps> = ({
  denomination,
  backgroundColor = '#A3E4D7',
  secondaryColor,
  containerStyles,
  centerStyles,
  cornerStyles,
}) => {
  const secondaryItemsColor = useMemo(() => {
    return secondaryColor || shadeColor(backgroundColor, -0.1);
  }, [backgroundColor, secondaryColor]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor, borderColor: secondaryItemsColor },
        containerStyles,
      ]}
    >
      {/* Corner ovals */}
      <View
        style={[
          styles.oval,
          styles.topLeft,
          { backgroundColor: secondaryItemsColor },
          cornerStyles,
        ]}
      />
      <View
        style={[
          styles.oval,
          styles.topRight,
          { backgroundColor: secondaryItemsColor },
          cornerStyles,
        ]}
      />
      <View
        style={[
          styles.oval,
          styles.bottomLeft,
          { backgroundColor: secondaryItemsColor },
          cornerStyles,
        ]}
      />
      <View
        style={[
          styles.oval,
          styles.bottomRight,
          { backgroundColor: secondaryItemsColor },
          cornerStyles,
        ]}
      />
      {/* Center circle */}
      <View
        style={[
          styles.centerCircle,
          { backgroundColor: secondaryItemsColor },
          centerStyles,
        ]}
      />
      <Text
        style={[
          styles.denominationText,
          { color: shadeColor(backgroundColor, -0.6) },
        ]}
      >
        {denomination}
      </Text>
    </View>
  );
};
