import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';

import styles from './styles';
import { colors } from '../../utils/theme';

interface Props {
  additionalStyle?: ViewStyle;
  color?: string;
  onPress: () => void;
  text: string;
  textSize?: number;
}
const DefaultButton = ({
  additionalStyle,
  color,
  onPress,
  text,
  textSize,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.mainContainer,
        additionalStyle,
        { backgroundColor: color },
      ]}>
      <Text style={{ fontSize: textSize }}>{text}</Text>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyle: {},
  color: colors.mainOrange,
  textSize: 14,
};

export default DefaultButton;
