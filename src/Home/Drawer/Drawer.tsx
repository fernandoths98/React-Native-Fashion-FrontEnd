import { CommonActions, DrawerActions } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { Dimensions, Image } from "react-native";
import RoundedIconButton from "../../components/RoundedIconButton";
import theme, { Box, Text } from "../../components/Theme";
import { UserContext } from "../../utility/user/user.context";
import DrawerItem, { DrawerItemsProps } from "./DrawerItem";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.661;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;

const items: DrawerItemsProps[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
    color: "yellow",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "pink",
  },
  {
    icon: "settings",
    label: "Notifications Settings",
    screen: "NotificationSetting",
    color: "violet",
  },
  {
    icon: "log-out",
    label: "Logout",
    color: "secondary",
    onPress: (navigation) => navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [{name: "Authentication"}]
    }))
  },
];


const Drawer = ({navigation}: any) => {

  

  // const {userProfile, getUserId}:any = useContext(UserContext);
  // const insets = useSafeAreaInsets()

  // useEffect(async() => {
  //   await getUserId()
  // }, [])

  return (
    <Box flex={1}>
      <Box flex={0.25} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="bgYs"
          flexDirection="row"
          justifyContent="space-between"
          paddingTop="s"
          padding="s"
        > 
          <RoundedIconButton 
            size={24}
            name="x"
            color="white"
            backgroundColor="bgYs"
            onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
          />
          <Text color="white">MY PROFILE</Text>
          <RoundedIconButton 
            size={24}
            name="shopping-bag"
            color="white"
            backgroundColor="bgYs"
            onPress={() => true}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="bgYs" />
        <Box flex={1} backgroundColor="primary" />
        <Image
          source={require("../../components/assets/patterns/3.png")}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: -height * 0.61,
            width: DRAWER_WIDTH,
            height: height,
          }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          justifyContent="center"
          padding="xl"
        >
          <Box
          position="absolute"
          left={DRAWER_WIDTH / 2 - 50}
          top={-50}
          backgroundColor="primary"
          width={100}
          height={100}
          style={{ borderRadius: 50 }} 
          />
          <Box marginVertical="m" marginTop="m">
            <Text variant="title1" textAlign="center">
              Fernando Teguh
            </Text>
            <Text variant="body" textAlign="center">
            {/* {userProfile && userProfile.email} */}
            </Text>
          </Box>
          {items.map((item) => (
            <DrawerItem key={item.screen} {...item} />
          ))}
        </Box>
      </Box>
      <Box
        backgroundColor="white"
        width={DRAWER_WIDTH}
        overflow="hidden"
        height={height * 0.61}
      >
        <Image
          source={require("../../components/assets/patterns/1.png")}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: -height * (1 - 0.61),
            width: DRAWER_WIDTH,
            height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
