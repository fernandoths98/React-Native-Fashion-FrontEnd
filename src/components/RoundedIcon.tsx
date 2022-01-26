import React from "react";
import { View } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Theme, Text } from "./Theme";

export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  iconRatio: number;
}

export const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio
}: RoundedIconProps) => {
  const iconSize = size * iconRatio;
  return (
    <Box
      height={size}
      width={size}
      borderRadius="m"
      justifyContent="center"
      alignItems="center"
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor }}
    >
      <Text style={{ width: iconSize, height: iconSize}} {...{ color }}>
        <Icon
          color="white"
          size={iconSize}
          style={{ textAlign: "center" }}
          {...{ name }}
        />
      </Text>
    </Box>
  );
};

RoundedIcon.defaultProps = {
  iconRatio: 0.7,
}
