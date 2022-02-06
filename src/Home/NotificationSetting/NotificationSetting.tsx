import { DrawerActions } from "@react-navigation/native";
import React from "react";
import { Dimensions } from "react-native";
import { HomeRoutes } from "../../components/Navigation";
import RoundedIconButton from "../../components/RoundedIconButton";
import theme, { Box, Text } from "../../components/Theme";

import Notification from "./Notification";

const { width } = Dimensions.get("window");

const NotificationSettings = ({
  navigation,
}: HomeRoutes<"NotificationSetting">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box flex={0.5} backgroundColor="white">
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
          <Text color="white">NOTIFICATION SETTINGS</Text>
          <RoundedIconButton
            size={24}
            name="user"
            color="white"
            backgroundColor="bgYs"
          />
        </Box>
        <Box>
          <Box marginLeft="m" marginRight="m">
            <Notification
              title="Outfit Ideas"
              description="Receive daily notifications"
            />
            <Notification
              title="Discounts & Sales"
              description="Buy the stuff you love for less"
            />
            <Notification
              title="Stock Notification"
              description="If the product you love comes back in stock"
            />
            <Notification
              title="New Stuff"
              description="Hear it first, wear it first"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NotificationSettings;
