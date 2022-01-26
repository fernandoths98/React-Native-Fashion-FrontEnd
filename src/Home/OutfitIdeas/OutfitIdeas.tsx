import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native"
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
    data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5},]}
    renderItem={() =>  <OutfitInfo />}
    keyExtractor={(item) => item.name}
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
