import React from "react";
import { Dimensions, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";

interface DotProps {
  index: number;
  passKey: any;
}

const { width } = Dimensions.get("window");

const Dot = ({ index, passKey }: DotProps) => {
  const opacity1 = useAnimatedStyle(() => {
    const ops = interpolateColor(
      passKey.value / width,
      [index - 1, index, index + 1],
      [
        "rgba(44, 185, 176, 0.5)",
        "rgba(44, 185, 176, 1)",
        "rgba(44, 185, 176, 0.5)",
      ]
    );

    return { backgroundColor: ops };
  });

  const animasi = useAnimatedStyle(() => {
    const anm = interpolate(
      passKey.value / width,
      [index - 1, index, index + 1],
      [1, 1.25, 1],
      "clamp"
    );

    return { transform: [{ scale: anm }] };
  });

  return (
    <Animated.View
      style={[
        {
          backgroundColor: "#2CB9B0",
          width: 8,
          height: 8,
          borderRadius: 4,
          margin: 5,
        }, animasi, opacity1
      ]}
    />
  );
};

export default Dot;
