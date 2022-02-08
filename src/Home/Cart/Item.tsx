import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import theme, { Box, Text } from "../../components/Theme";
import { SwipeableRows } from "./SwipeableRows";

interface ItemProps {
  onDelete: () => void;
  cart: any;
}

export const Item = ({ onDelete, cart }: ItemProps) => {
  const height = 120 + theme.spacing.m * 2;
  return (
    <SwipeableRows onDelete={onDelete} height={height}>
      <Box flexDirection="row" padding="m">
        <Box
          width={120}
          height={120}
          borderRadius="m"
          style={{ backgroundColor: "#BFEAF5" }}
        >
          <Card.Cover
          style={styles.cover}
          source={{
            uri:
              "http://192.168.1.5:3000/api/product/image/" +
              cart.image_product
          }}
          >
            
          </Card.Cover>
          {/* <Image
            source={{uri:
              "http://192.168.1.8:3000/api/product/image/" +
              cart.image_product}
            }
          /> */}
        </Box>
        <Box padding="m" flex={1} justifyContent="center">
          <Text variant="body">Size : {cart.size_product}</Text>
          <Text variant="title3" marginBottom="s">
            {cart.title_product}
          </Text>
          <Text variant="title3" color="primary">
            Rp {cart.price}
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
              x{cart.quantity}
            </Text>
          </Box>
        </Box>
      </Box>
    </SwipeableRows>
  );
};

const styles = StyleSheet.create({
  cover: {
    justifyContent: "center",
    padding: 10,
    width: 120,
    height: 120,
    borderRadius: 16,
    
  },
})