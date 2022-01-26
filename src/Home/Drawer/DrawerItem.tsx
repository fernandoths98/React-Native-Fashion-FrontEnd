import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { TypeOf } from "yup";
import { HomeRoutes } from "../../components/Navigation";
import { RoundedIcon } from "../../components/RoundedIcon";
import theme, { Box, Theme, Text } from "../../components/Theme";

export interface BaseItem {
    icon: string;
    color: keyof Theme["colors"];
    label: string;
}

interface ScreenItem extends BaseItem {
    screen: keyof HomeRoutes;
}

interface onPressItem extends BaseItem {
    onPress: (navigation: ReturnType<typeof useNavigation>) => void;
}

export type DrawerItemsProps = ScreenItem | onPressItem;

const DrawerItem = ({icon, color, label, ...props}: DrawerItemsProps) => {

    const navigation = useNavigation<DrawerNavigationProp<HomeRoutes, "OutfitIdeas">>();

    return (
        <RectButton style={{ borderRadius: theme.borderRadii.m }}
        onPress={() => "screen" in props ? navigation.navigate(props.screen) : props.onPress(navigation)}
        >
            <Box flexDirection="row" alignItems="center" padding="m">
                <RoundedIcon
                iconRatio={0.5}
                    name={icon}
                    size={36}
                    backgroundColor={color}
                    color={"white"}
                />
                <Text variant="button" color="secondary" marginLeft="m">{label}</Text>
            </Box>
        </RectButton>
    )
}
export default DrawerItem;