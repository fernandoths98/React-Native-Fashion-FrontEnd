import React from "react";
import { Button } from "../../components";
import {
  AuthNavigationProps,
} from "../../components/Navigation";
import { Box, Text } from "../../components/Theme";

// const picture = {
//     src: require("../../assets/images/5.png"),
//     width: 3383,
//     height: 5074,
// }

// export const assets = [picture.src]
const Welcome = ({
  navigation,
}: AuthNavigationProps<"Welcome">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
      ></Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          flex={1}
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account Login"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            label="Join us, it's free"
            onPress={() => navigation.navigate("SignUp")}
          />
          <Button
            variant="transparant"
            label="Forgot password?"
            onPress={() => navigation.navigate("ForgotPassword")}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
