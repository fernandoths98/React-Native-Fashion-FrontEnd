import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native"
import { ProductsContext } from "../../utility/product.context";
import { OutfitInfo } from "./Outfit-info.components";

interface OutfitIdeasProps {}

const CardList = styled(FlatList).attrs({
    listContainer: {
        padding: 16,
    }
})``;

export const OutfitIdeas = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const {retiveProducts, products}: any = useContext(ProductsContext);

  // console.log("Cie error "+ retiveProducts());
  // retiveProducts();
  // console.log(products);

  useEffect(() => {
    retiveProducts()
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: "#ce264d" }}
    >
      <Searchbar
        style={styles.search}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    <FlatList
    data={products}
    renderItem={(products) =>  <OutfitInfo value={products}/>}
    keyExtractor={(item) => item.id + Math.random()}
    contentContainerStyle={{padding: 16}}
    showsVerticalScrollIndicator={false}
    />
       
 
    </View>
  );
};

const styles = StyleSheet.create({
    search: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
    }
})
