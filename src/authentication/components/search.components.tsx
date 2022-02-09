import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { ProductsContext } from "../../utility/product/product.context";

const SearchContainer = styled.View`
  padding: 10px;
`;

export const Search = ({ isFavouritesToggle, onFavouritesToggle, setDataSearch }) => {
  const { keywords, search, resultProduct } = useContext(ProductsContext);
  const [searchKeywords, setSearchKeywords] = useState(keywords);

  useEffect(async() => {
    if (searchKeywords == '') {
      resultProduct()
      .then((res) => {
        setDataSearch(res);
        // console.log("search",res)
      })
    } else {
      setDataSearch(await search(searchKeywords))
    }
  }, [searchKeywords]);
  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesToggle ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        placeholder="Search Outfit"
        value={searchKeywords}
        // onSubmitEditing={async () => {
        //   setDataSearch(await search(searchKeywords))
        // }}
        onChangeText={(text) => {
          setSearchKeywords(text);
        }}
      />
    </SearchContainer>
  );
};
