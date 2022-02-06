import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Box, Text } from "../../components/Theme";
import { OutfitDetailScreen } from "../OutfitIdeas/Outfit-detail.sceen";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  return (
    <FavouritesWrapper>
      <Box>
        <Text variant="body"> Favourites </Text>
      </Box>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((outift) => {
          const key = outift.name;
          return (
            <Box key={key}>
              <TouchableOpacity
                onPress={() => onNavigate("OutfitDetail", { outfit })}
              >
                <OutfitDetailScreen outfit={outfit} />
              </TouchableOpacity>
            </Box>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
