import React from 'react';
import {Pressable, Text, PressableProps} from 'react-native';
import {globalStyles} from '../theme/theme.tsx';

interface PrimaryButtonProps extends PressableProps {
  label: string;
  onPress: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onPress,
}: PrimaryButtonProps) => {
  return (
    <Pressable style={globalStyles.primaryButton} onPress={() => onPress()}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
