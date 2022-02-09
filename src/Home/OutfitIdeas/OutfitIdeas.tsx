import { DrawerActions } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { Search } from "../../authentication/components/search.components";
import RoundedIconButton from "../../components/RoundedIconButton";
import { Box, Text } from "../../components/Theme";
import { FavouritesContext } from "../../utility/favourites/favourites.context";
import { ProductsContext } from "../../utility/product/product.context";
import { FavouritesBar } from "../Favorites/favourites-bar.components";
import { OutfitInfo } from "./Outfit-info.components";

interface OutfitIdeasProps {}

const CardList = styled(FlatList).attrs({
  listContainer: {
    padding: 16,
  },
})``;

export const OutfitIdeas = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const { resultProduct, products }: any = useContext(ProductsContext);
  const [data, setData] = useState([]);

  const { favourites } = useContext(FavouritesContext);

  const [isToggle, setIsToggle] = useState(false);

  // console.log("Cie error "+ retiveProducts());
  // retiveProducts();
  // console.log(products);

  const setDataSearch = (searchResult) => {
    setData(searchResult);
    
    };

    
  useEffect(async () => {
    const data = await resultProduct();
    
    setData(data);
    // resultProduct()
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#ce264d" }}>
      <Box
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor="bgYs"
        flexDirection="row"
        justifyContent="space-between"
        paddingTop="s"
        padding="s"
      >
        <RoundedIconButton
          size={24}
          name="menu"
          color="white"
          backgroundColor="bgYs"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <Text color="white">OUTFIT</Text>
        <RoundedIconButton
          size={24}
          name="shopping-bag"
          color="white"
          backgroundColor="bgYs"
          onPress={() => navigation.navigate("Cart")}
        />
      </Box>
      <Search
        setDataSearch={setDataSearch}
        isFavouritesToggle={isToggle}
        onFavouritesToggle={() => setIsToggle(!isToggle)}
      />
      {isToggle && (
        <FavouritesBar favourites={favourites} onNavigate={undefined} />
      )}
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(data) => data.id.toString()}
        renderItem={(data) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("OutfitDetail", {
                  outfit: data,
                })
              }
            >
              <OutfitInfo value={data} />
            </TouchableOpacity>
          );
        }}
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
  },
});
