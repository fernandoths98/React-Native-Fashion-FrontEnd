import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeRoutes } from "../components/Navigation";

import { OutfitIdeas } from "./OutfitIdeas/OutfitIdeas";
import DrawerContent, {DRAWER_WIDTH } from "./Drawer/Drawer";
import { EditProfile } from "./EditProfile";

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
  <Drawer.Navigator drawerContent={DrawerContent} 
  drawerStyle={{width: DRAWER_WIDTH}}>
    <Drawer.Screen
      options={{ headerShown: false }}
      name="OutfitIdeas"
      component={OutfitIdeas}
    />

    <Drawer.Screen
      options={{ headerShown: false }}
      name="EditProfile"
      component={EditProfile}
    />
{/* 
    <Drawer.Screen
      options={{ headerShown: false }}
      name="SignUp"
      component={OutfitIdeas}
    /> */}

  </Drawer.Navigator>
);
