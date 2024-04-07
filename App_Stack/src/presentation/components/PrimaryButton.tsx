import React from "react";
import { Pressable, Text, PressableProps } from "react-native";
import { globalStyles } from "../theme/Theme";


interface primaryButtonPropos extends PressableProps{
    label: string;
    onPress: () => void;
}

const primaryButton: React.FC<primaryButtonPropos> = ({label, onPress}: primaryButtonPropos) => {
    return (
      <Pressable style={globalStyles.primaryButton} onPress={() => onPress()}>
        <Text style={globalStyles.buttonText}>{label}</Text>
      </Pressable>
    );
  };

  export default primaryButton;
  