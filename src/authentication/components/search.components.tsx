import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { ProductsContext } from "../../utility/product/product.context";

const SearchContainer = styled.View`
  padding: 10px;
`;

export const Search = ({ isFavouritesToggle, onFavouritesToggle, setDataSearch }) => {
  const { keywords, search } = useContext(ProductsContext);
  const [searchKeywords, setSearchKeywords] = useState(keywords);

  useEffect(() => {
    setSearchKeywords(keywords);
  }, [keywords]);
  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesToggle ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        placeholder="Search Outfit"
        value={searchKeywords}
        onSubmitEditing={async () => {
          setDataSearch(await search(searchKeywords))
        }}
        onChangeText={(text) => {
          setSearchKeywords(text);
        }}
      />
    </SearchContainer>
  );
};
