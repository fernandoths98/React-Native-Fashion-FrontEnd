import React from "react";
import { View, StyleSheet, Dimensions, Alert } from "react-native";
import { Card, IconButton } from "react-native-paper";
import { Text, ButtonCart } from "../../components";
import { FavoritesOutfits } from "../Favorites/Favorites.components";
import Carousel from "react-native-snap-carousel";
import { Box } from "../../components/Theme";

export const SLIDER_WIDTH = Dimensions.get("window").width / 2;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.81);

export const OutfitInfo = ({ value }) => {
  //console.log(value.item);

  return (
    <Card elevation={1} style={styles.card}>
      <FavoritesOutfits value={value} />
      <Card.Cover
        style={styles.cover}
        source={{
          uri:
            "http://192.168.100.11:3000/api/product/image/" +
            value.item.image_product[0].image_filename,
        }}
      />

      <Text variant="title3" style={styles.text}>
        {value.item.title_product}
      </Text>
      <Text variant="title2" style={styles.text}>
        Rp. {value.item.price}
      </Text>
      
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginTop: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
  },
  cover: {
    marginTop: 10,
    justifyContent: "center",
    
    width: ITEM_WIDTH,
    height: 300,
    borderRadius: 30,
  },

  text: {
    marginLeft: 10,
    padding: 5,
  },
});
