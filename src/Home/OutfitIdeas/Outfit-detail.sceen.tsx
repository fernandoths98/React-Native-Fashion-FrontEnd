import { SafeArea } from "../../components/utility/safe-area.components";
import { OutfitInfo } from "./Outfit-info.components";
import React, { useState } from "react";
import { Card, IconButton, List } from "react-native-paper";
import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Box, Text } from "../../components/Theme";
import ButtonCart from "../../components/ButtonCart";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export const OutfitDetailScreen = ({ navigation, route }) => {
  const [quantityCount, setQuantityCount] = useState(0);
  const plusCount = () =>
    setQuantityCount((quantityCount) => quantityCount + 1);
  const minsCount = () =>
    setQuantityCount((quantityCount) => quantityCount - 1);
  const { outfit } = route.params;

  const sizes = outfit.item.size;

  console.log(sizes);

  return (
    <Box flex={1} backgroundColor="bgYs">
      <Box style={styles.card}>
        <Card.Cover
          style={styles.cover}
          source={{
            uri:
              "http://192.168.100.11:3000/api/product/image/" +
              outfit.item.image_product[0].image_filename,
          }}
        />
        <Text variant="title1">{outfit.item.title_product} </Text>
      </Box>

      <Box style={styles.coverText}>
        <Box flex={1} backgroundColor="white">
          <Text variant="title2" marginLeft="m" marginTop="m">
            Rp. {outfit.item.price}{" "}
          </Text>
          <Text variant="title2" marginLeft="m" marginTop="s">
            Size :{" "}
          </Text>
          <Box flexDirection="row">
            {sizes.map((size) => {
              return (
                <TouchableOpacity
                  onPress={() => Alert.alert("Kamu memilih Size")}
                  style={styles.roundButton1}
                >
                  <Text variant="title2">{size.size}</Text>
                </TouchableOpacity>
              );
            })}
          </Box>

          <Text variant="body" marginLeft="m" marginRight="m">
            {outfit.item.description}{" "}
          </Text>

          <Text variant="title2" marginLeft="m" marginTop="m">
            Quantity :
          </Text>
          <Box flexDirection="row" flexWrap="wrap">
            <Box
              alignItems="flex-end"
              flex-direction="row"
              marginTop="m"
              marginBottom="l"
            >
              <TouchableOpacity onPress={minsCount} style={styles.roundButton1}>
                <Text variant="title2">-</Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="flex-end"
              flex-direction="row"
              marginTop="l"
              marginBottom="l"
              marginLeft="s"
            >
              <Text variant="title2">{quantityCount}</Text>
            </Box>

            <Box
              alignItems="flex-end"
              flex-direction="row"
              marginTop="m"
              marginBottom="l"
              marginRight="l"
            >
              <TouchableOpacity onPress={plusCount} style={styles.roundButton1}>
                <Text variant="title2">-</Text>
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>

        <Box
          alignSelf="stretch"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box marginTop="m" marginBottom="l" marginLeft="l">
            <ButtonCart
              variant="cart"
              onPress={() => navigation.navigate("OutfitIdeas")}
            >
              <IconButton icon="reply" color="#fff" />
            </ButtonCart>
          </Box>

          <Box marginTop="m" marginBottom="l" marginRight="l">
            <ButtonCart variant="cart" onPress={() => navigation.navigate("Cart")}>
              <IconButton icon="cart" color="#fff" />
            </ButtonCart>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 0.45,
    alignItems: "center",
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  coverText: {
    flex: 0.55,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  cover: {
    marginTop: 10,
    justifyContent: "center",
    padding: 10,
    width: ITEM_WIDTH,
    height: 300,
    borderRadius: 30,
  },
  container: {
    flex: 1,
    marginTop: 35,
  },
  roundButton1: {
    width: 50,
    height: 50,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#2eb8b1",
  },
});
