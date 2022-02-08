import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { TextInput } from "../../authentication/components/Form/TextInput";
import { Box, Text } from "../../components/Theme";

interface Tab {
  id: string;
  title: string;
}

interface TabProps {
  tabs: Tab[];
}

const { width } = Dimensions.get("window");
export const Tabs = ({ tabs, children }: TabProps) => {

  const [index, setIndex] = useState(0);
  const selectedTab = tabs[index];
  // console.log(tabs);
  return (
    <Box>
      <Box flexDirection="row">
        {tabs.map((tab, i) => (
          <RectButton
            style={{ flex: 1 }}
            key={i}
            onPress={() => setIndex(index)}
          >
            <Box padding="m" paddingBottom="m">
              <Text textAlign="center">{tab.title}</Text>
            </Box>
          </RectButton>
        ))}
      </Box>
      
    </Box>
  );
};
