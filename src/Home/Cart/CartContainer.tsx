import React, { FC, ReactNode } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import theme, { Box } from "../../components/Theme";

import { clamp, snapPoint } from "react-native-redash";

const { width } = Dimensions.get("window");
const aspectRatio = width / 375;
const height = 682 * aspectRatio;
const minHeight = 228 * aspectRatio;

const snapPoints = [-(height - minHeight), 0];

interface CartProps {
  children: ReactNode;
  cartDetail: any
  CheckoutComponent: FC<{minHeight: number}>;
}

export const CartContainer = ({ children, cartDetail, CheckoutComponent }: CartProps) => {
  const translateY = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<{ y?: number }>({
    onStart: (event, ctx) => {
      ctx.y = translateY.value;
    },

    onActive: ({ translationY }, ctx) => {
      translateY.value = clamp(
        ctx.y + translationY,
        snapPoints[0],
        snapPoints[1]
      );
    },
    onEnd: ({ velocityY }) => {
      const dest = snapPoint(translateY.value, velocityY, snapPoints);
      translateY.value = withSpring(dest, { overshootClamping: true });
    },
  });

  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  return (
    <Box flex={1} backgroundColor="bgYs">
      <CheckoutComponent minHeight={minHeight} cartDetail={cartDetail}/>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            {
              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
              height: height,
              backgroundColor: "white",
              borderBottomLeftRadius: theme.borderRadii.xl,
              borderBottomRightRadius: theme.borderRadii.xl,
              overflow: "hidden",
              paddingBottom: theme.spacing.xl
            },
            style,
          ]}
        >
          {children}
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              width: width,
              height: theme.borderRadii.xl,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 5 * aspectRatio,
                backgroundColor: theme.colors.primary,
                width: 60 * aspectRatio,
                marginBottom: theme.spacing.m,
                borderRadius: 2.5,
              }}
            />
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};
