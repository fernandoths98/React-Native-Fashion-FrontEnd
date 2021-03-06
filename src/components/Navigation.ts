import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp,  RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface AuthNavigationProps <
    RouteName extends keyof AuthenticationRoutes
> {
    navigation :  CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, RouteName>,
    DrawerNavigationProp<AppRoutes, "Home">
    >
    route: RouteProp<AuthenticationRoutes, RouteName>;
}

export type AppRoutes = {
    Authentication: undefined;
    Home: undefined;
  };

export type AuthenticationRoutes = {
    Onboarding: undefined;
    Welcome: undefined;
    Login: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
    Home: undefined;
    PasswordChanges: undefined;
}

export type HomeRoutes = {
    OutfitIdeas: undefined;
    FavoritesOutfits: undefined;
    EditProfile: undefined;
    TransactionHistory: undefined;
    OutfitDetail: undefined;
    NotificationSetting: undefined;
    Cart: undefined;
  };