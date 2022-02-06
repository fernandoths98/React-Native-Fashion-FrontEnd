import { useTheme } from "@shopify/restyle";
import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Theme, Text } from "./Theme";

interface ButtonProps {
  variant: "default" | "primary" | "transparant" | "cart";
  label?: string;
  onPress: () => void;
  children?: ReactNode;
}

const ButtonCart = ({ variant, label, onPress, children }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "cart"
      ? theme.colors.primary
      : variant === "transparant"
      ? "transparant"
      : theme.colors.grey;
  const color =
    variant === "primary" ? theme.colors.white : theme.colors.secondary;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      {children ? (
        children
      ) : (
        <Text variant="button" style={{ color }}>
          {label}
        </Text>
      )}
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});

ButtonCart.defaultProps = { variant: "default" };

export default ButtonCart;
