import React, {useContext, useState} from 'react';
import styled from "styled-components/native";
import {TouchableOpacity} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import { FavouritesContext } from '../../utility/favourites/favourites.context';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  right: -20;
  top: 0;
  margin: 15px;
  z-index: 10;
`;

export const FavoritesOutfits = ({outfit}: any) => {
    const { favourites, addToFavourites, removeFromFavourites }: any = useContext(FavouritesContext);

    // const isFavouritesToggle = favourites.find((r:any) => r.id === outfit.id);

    // console.log(outfit);

    const isFavouritesToggle = useState()
    // console.log(isFavouritesToggle);

    return (
        <FavouriteButton 
        onPress={() => {
            !isFavouritesToggle
            ? addToFavourites(outfit)
            : removeFromFavourites(outfit)
        }}
        >
            <AntDesign
            name={isFavouritesToggle ? "heart" : "hearto"}
            size={26} 
            color={isFavouritesToggle ? "red" : "black"}/>
        </FavouriteButton>
    )

}