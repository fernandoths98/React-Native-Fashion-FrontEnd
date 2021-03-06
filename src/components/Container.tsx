import { useTheme } from "@shopify/restyle";
import React, { ReactNode } from "react";
import { Dimensions, View, Image, StyleSheet, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import theme, { Box } from "./Theme";

export const assets = [
  require("./assets/patterns/1.png"),
  require("./assets/patterns/2.png"),
  require("./assets/patterns/3.png"),
] as const;

const { width, height: wHeight } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
  pattern: 0 | 1 | 2;
}
// arrow function
export const Container = ({ children, footer, pattern }: ContainerProps) => {
  const theme = useTheme();
  const asset = assets[pattern];
  const insets = useSafeAreaInsets();
  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box height={wHeight} backgroundColor="bgYs">
        <StatusBar barStyle="light-content" />
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}
          >
            <Image
              source={asset}
              style={{
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image
            source={asset}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              top: -height * 0.61,
            }}
          />
          <Box
            borderRadius="xl"
            borderTopLeftRadius={0}
            backgroundColor="white"
            flex={1}
            justifyContent="center"
            padding="xl"
          >
            {children}
          </Box>
        </Box>
        <Box backgroundColor="bgYs" paddingTop="m">
          {footer}
          {/* <Box height={insets.bottom} /> */}
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};
