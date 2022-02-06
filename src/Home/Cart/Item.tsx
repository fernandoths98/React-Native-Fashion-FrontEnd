import React from "react";
import { View } from "react-native";
import theme, { Box, Text } from "../../components/Theme";
import { SwipeableRows } from "./SwipeableRows";

interface ItemProps {
  onDelete: () => void;
}

export const Item = ({ onDelete }: ItemProps) => {
  const height = 120 + theme.spacing.m * 2;
  return (
    <SwipeableRows onDelete={onDelete} height={height}>
      <Box flexDirection="row" padding="m">
        <Box
          width={120}
          height={120}
          borderRadius="m"
          style={{ backgroundColor: "#BFEAF5" }}
        />
        <Box padding="m" flex={1} justifyContent="center">
          <Text variant="body">Size M, L</Text>
          <Text variant="title3" marginBottom="s">
            Short Sleeve Organic Top
          </Text>
          <Text variant="title3" color="primary">
            $29.99
          </Text>
        </Box>
        <Box justifyContent="center">
          <Box
            backgroundColor="secondary"
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 24,
              height: 24,
              borderRadius: 12,
            }}
          >
            <Text variant="body" color="white">
              x2
            </Text>
          </Box>
        </Box>
      </Box>
    </SwipeableRows>
  );
};
