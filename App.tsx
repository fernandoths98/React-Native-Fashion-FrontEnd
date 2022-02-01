import * as React from "react";

import { ThemeProvider } from "@shopify/restyle";

import { LoadAssets, theme } from "./src/components";
import { AuthenticationNavigator } from "./src/authentication";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeNavigator } from "./src/Home";
import { AppRoutes } from "./src/components/Navigation";
import { ProductsContextProvider } from "./src/utility/product.context";

// const assets = [...authenticationAssets]

const AppStack = createStackNavigator<AppRoutes>();

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <SafeAreaProvider>
          <ProductsContextProvider>
            <AppStack.Navigator>
              <AppStack.Screen
                options={{ headerShown: false }}
                name="Authentication"
                component={AuthenticationNavigator}
              />

              <AppStack.Screen
                options={{
                  headerShown: false,
                }}
                name="Home"
                component={HomeNavigator}
              />
            </AppStack.Navigator>
          </ProductsContextProvider>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
