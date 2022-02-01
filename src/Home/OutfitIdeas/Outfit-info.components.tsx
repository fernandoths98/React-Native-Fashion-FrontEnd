import React from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { Text } from "../../components";
import { FavoritesOutfits } from "../Favorites/Favorites.components";

export const OutfitInfo = ({ value }) => {
  // const {
  //   name = "Baju Yumster",
  //   photos = [
  //     "https://play-lh.googleusercontent.com/wNAQC4JIqMIYUo5-txxS-qIEMGoqbckYqpD-1Jxpd2EvmBmd6nF7hga758g6NKnqqyJe=s180-rw",
  //   ],
  //   description = "Bajunya Bagus",
  // } = value;

  console.log(value);
  

  return(
      <Card
      elevation={5} style={styles.card}>
        <FavoritesOutfits />
          <Card.Cover style={styles.cover} source={{uri: value.item.image_product}}/> //uri: "endpoint" + filename
          <Text variant="title1" style={styles.text}>{value.item.title_product}</Text>
          <Text variant="title2" style={styles.text}>Size : {value.item.size_product}</Text>
          <Text variant="body" style={styles.text}>{value.item.description}</Text>
      </Card>
  )
};

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "white",
        borderRadius: 10,
    }, 
    cover: {
        padding: 10,
        backgroundColor: "white",
    },

    text: {
        padding: 10,
    }
})
