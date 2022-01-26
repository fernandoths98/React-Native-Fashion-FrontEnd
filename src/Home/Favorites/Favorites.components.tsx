import React, {useContext} from 'react';
import styled from "styled-components/native";
import {TouchableOpacity} from "react-native";
import {AntDesign} from "@expo/vector-icons";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
  z-index: 10;
`;

export const FavoritesOutfits = () => {
    // const {favorites, setFavorite } = useContext([]);

    return (
        <FavouriteButton>
            <AntDesign
            name='heart'
            size={26} 
            color="yellow"/>
        </FavouriteButton>
    )

}