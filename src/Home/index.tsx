import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeRoutes } from "../components/Navigation";

import { OutfitIdeas } from "./OutfitIdeas/OutfitIdeas";
import DrawerContent, { DRAWER_WIDTH } from "./Drawer/Drawer";
import { EditProfile } from "./EditProfile";
import { OutfitDetailScreen } from "./OutfitIdeas/Outfit-detail.sceen";
import NotificationSetting from "./NotificationSetting/NotificationSetting";
import { Cart } from "./Cart/Cart";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import { FavouritesBar } from "./Favorites/favourites-bar.components";

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
  <Drawer.Navigator
    drawerContent={DrawerContent}
    drawerStyle={{ width: DRAWER_WIDTH }}
  >
    <Drawer.Screen
      options={{ headerShown: false, unmountOnBlur: true }}
      name="OutfitIdeas"
      component={OutfitIdeas}
    />

    <Drawer.Screen
      options={{ headerShown: false, unmountOnBlur: true }}
      name="EditProfile"
      component={EditProfile}
    />

    <Drawer.Screen
      options={{ headerShown: false }}
      name="OutfitDetail"
      component={OutfitDetailScreen}
    />

    <Drawer.Screen
      options={{ headerShown: false }}
      name="NotificationSetting"
      component={NotificationSetting}
    />

    {/* <Drawer.Screen
      options={{ headerShown: false }}
      name="FavoritesOutfits"
      component={FavouritesBar}
    /> */}

    <Drawer.Screen
      options={{ headerShown: false, unmountOnBlur: true }}
      name="TransactionHistory"
      component={TransactionHistory}
    />

    <Drawer.Screen
      options={{ headerShown: false, unmountOnBlur: true }}
      name="Cart"
      component={Cart}
    />
  </Drawer.Navigator>
);
