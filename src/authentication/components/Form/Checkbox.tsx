import React, { useState } from "react";
import { View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text } from "../../../components/Theme";


import { Feather as Icon } from "@expo/vector-icons";

interface CheckboxProps {
  label: string;
}

export const Checkbox = ({label}: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <RectButton
      onPress={() => setChecked((c) => !c)}
      style={{ justifyContent: "center" }}
    >
      <Box flexDirection="row" alignItems="center">
        <Box
        marginRight="m"
          height={20}
          width={20}
          borderRadius="s"
          justifyContent="center"
          alignItems="center"
          borderWidth={1}
          borderColor="primary"
          backgroundColor={checked ? "primary" : "white"}
        >
            <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};
