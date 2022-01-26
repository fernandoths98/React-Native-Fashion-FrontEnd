import React from "react";

import Onboarding from "./Onboarding";
import Welcome from "./Welcome";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthenticationRoutes } from "../components/Navigation";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { ForgotPassword } from "./ForgotPassword/ForgotPassword";
import { PasswordChanges } from "./PasswordChanges";
// export const assets = [...onBoardingAssets, ...welcomeAssets];

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();
export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen
        options={{
          headerShown: false,
        }}
        name="Onboarding"
        component={Onboarding}
      />

      <AuthenticationStack.Screen
        options={{
          headerShown: false,
        }}
        name="Welcome"
        component={Welcome}
      />

      <AuthenticationStack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={Login}
      />

      <AuthenticationStack.Screen
        options={{
          headerShown: false,
        }}
        name="SignUp"
        component={SignUp}
      />

      <AuthenticationStack.Screen
        options={{
          headerShown: false,
        }}
        name="ForgotPassword"
        component={ForgotPassword}
      />

      <AuthenticationStack.Screen
        options={{
          headerShown: false,
        }}
        name="PasswordChanges"
        component={PasswordChanges}
      />
    </AuthenticationStack.Navigator>
  );
};
