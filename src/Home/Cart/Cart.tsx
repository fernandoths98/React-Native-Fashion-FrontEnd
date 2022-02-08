import React, { useContext, useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import Header from "../../components/Header";
import { HomeRoutes } from "../../components/Navigation";
import theme, { aspectRatio, Box, Text } from "../../components/Theme";
import { CartContext } from "../../utility/cart/cart.context";

import { CartContainer } from "./CartContainer";
import { Checkout } from "./Checkout";
import { Item } from "./Item";

const { width } = Dimensions.get("window");
const height = 100 * aspectRatio;
const d = "M 0 0 A 50 50 0 0 0 50 50 H 325 A 50 50 0 0 1 375 100 V 0 Z";

const defaultItems = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];


export const Cart = ({ navigation }: HomeRoutes<"Cart">) => {
  // const [items, setItems] = useState(defaultItems);

  const [cart, setCart] = useState([]);

  // console.lorg(cart)

  const { getCart }: any = useContext(CartContext);

  useEffect(async () => {
    await getCart()
    .then((res) =>{
      setCart(res.data);
    })
    .catch((err:any) => {
      // console.log(err);
    })
  }, []);

  return (
    <CartContainer CheckoutComponent={Checkout} cart={cart}>
      <Box backgroundColor="primary">
        <Header
          dark
          title="Shopping Cart"
          left={{ icon: "arrow-left", onPress: () => navigation.goBack() }}
        />
      </Box>
      <Box flex={1}>
        <ScrollView
          style={{
            borderBottomLeftRadius: theme.borderRadii.xl,
            borderBottomRightRadius: theme.borderRadii.xl,
          }}
          contentContainerStyle={{ paddingVertical: 50 * aspectRatio }}
          showsVerticalScrollIndicator={false}
        >
          {cart &&
            cart.map((item, i) => {
              return (
                <Item
                  key={i}
                  cart={item}
                  onDelete={() => {
                  }}
                />
              );
            })}
        </ScrollView>
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height,
          }}
        >
          <Svg style={StyleSheet.absoluteFill} viewBox="0 0 374 100">
            <Path d={d} fill={theme.colors.primary} />
          </Svg>
          <Text variant="title2" color="white" textAlign="center">
            {cart.length} Items Added
          </Text>
        </Box>
      </Box>
    </CartContainer>
  );
};
