import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import theme, { Box } from "../../../components/Theme";
import { RoundedIcon } from "../../../components";

interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon: string;
  error: any;
  errorMessage: string;
}

const SIZE = theme.borderRadii.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;
// Arrow Function = () => {}
export const TextInput = ({
  icon,
  placeholder,
  error,
  errorMessage,
  ...props
}: TextInputProps) => {
  const [state, setState] = useState<InputState>(Pristine); //Pr ngerubah state dari null supaya tidak null
  const reColor: keyof typeof theme.colors =
    state === Pristine ? "darkGrey" : state === Valid ? "primary" : "danger";
  const color = theme.colors[reColor];

  // console.log(error);
  return (
    <Box
      marginTop="l"
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
    >
      <Box paddingHorizontal="s">
        <Icon name={icon} size={16} {...{ color }} />
      </Box>

      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          {...props}
          placeholder={placeholder}
        />
      </Box>
      {(props.value !== undefined || error) && (

        <RoundedIcon 
        name={error ? "x" : "check"} 
        size={SIZE} 
        backgroundColor={error ? "danger" : "primary"}
        color="white"/>
      )}
    </Box>
  );
};
