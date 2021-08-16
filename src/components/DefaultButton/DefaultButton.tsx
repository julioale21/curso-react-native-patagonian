import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';

import styles, { buttonTextColors } from './styles';
import { colors } from '../../utils/theme';
import Typography from '../Typography';
interface Props {
  additionalStyle?: ViewStyle;
  onPress: () => void;
  text: string;
  textSize?: number;
  variant?: 'primary' | 'secondary';
}

const DefaultButton = ({
  additionalStyle,
  onPress,
  text,
  textSize,
  variant = 'primary',
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, styles[variant], additionalStyle]}
      onPress={onPress}>
      <Typography
        color={buttonTextColors[variant] || colors.white}
        size={textSize}
        variant="medium">
        {text}
      </Typography>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyle: {},
  textSize: 24,
  variant: 'primary',
};

export default DefaultButton;
