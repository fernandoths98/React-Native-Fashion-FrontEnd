import React from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { Text } from "../../components";
import { FavoritesOutfits } from "../Favorites/Favorites.components";

export const OutfitInfo = ({ outfit = {} }) => {
  const {
    name = "Baju Yumster",
    photos = [
      "https://play-lh.googleusercontent.com/wNAQC4JIqMIYUo5-txxS-qIEMGoqbckYqpD-1Jxpd2EvmBmd6nF7hga758g6NKnqqyJe=s180-rw",
    ],
    description = "Bajunya Bagus",
  } = outfit;

  return(
      <Card
      elevation={5} style={styles.card}>
        <FavoritesOutfits />
          <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}}/>
          <Text variant="title1" style={styles.text}>{name}</Text>
          <Text variant="body" style={styles.text}>{description}</Text>
      </Card>
  )
};

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "white"
    }, 
    cover: {
        padding: 10,
        backgroundColor: "white",
    },

    text: {
        padding: 10,
    }
})
