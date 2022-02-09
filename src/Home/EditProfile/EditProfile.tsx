import { yupResolver } from "@hookform/resolvers/yup";
import { DrawerActions } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Dimensions, View } from "react-native";
import { HomeRoutes } from "../../components/Navigation";
import RoundedIconButton from "../../components/RoundedIconButton";
import theme, { Box, Text } from "../../components/Theme";
import { Tabs } from "./Tabs";
import * as yup from "yup";
import { TextInput } from "../../authentication/components/Form/TextInput";
import { Button } from "../../components";
import { UserContext } from "../../utility/user/user.context";

const { width } = Dimensions.get("window");
const tabs = [
  { id: "configuration", title: "Configuration" },
  { id: "info", title: "Personal Info" },
];
export const EditProfile = ({ navigation }: HomeRoutes<"EditProfile">) => {
  const schema = yup.object().shape({
    email: yup.string().email("Emailnya yang bener bos!").required(), //email("Pesan Email")
    fullName: yup.string().min(4).max(20).required(),
    address: yup.string().min(10).max(30).required(),
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    navigation.navigate("EditProfile");
  };

  const { userProfile, getUserId }: any = useContext(UserContext);

  // console.log(userProfile);

  useEffect(async () => {
    await getUserId();
  }, [reset]);

  return (
    <Box flex={1} backgroundColor="white">
      <Box flex={0.5} backgroundColor="white">
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
            name="menu"
            color="white"
            backgroundColor="bgYs"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
          <Text color="white">EDIT PROFILE</Text>
          <RoundedIconButton
            size={24}
            name="user"
            color="white"
            backgroundColor="bgYs"
          />
        </Box>
      </Box>
      <Box>
        <Box
          position="absolute"
          left={width / 2 - 50}
          top={-50}
          backgroundColor="primary"
          width={100}
          height={100}
          style={{ borderRadius: 50 }}
        />
        <Box marginVertical="s" style={{ marginTop: 50 + theme.spacing.m }}>
          <Text variant="title1" textAlign="center">
            {userProfile && userProfile.fullName}
          </Text>
          <Text variant="body" textAlign="center">
            {userProfile && userProfile.email}
          </Text>
        </Box>
        <Box padding="m" justifyContent="center">
          <Controller
            defaultValue={userProfile && userProfile.email}
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                icon="mail"
                placeholder="Enter your Email"
                onChangeText={(text) => onChange(text)}
                value={value}
                error={errors.email}
                errorMessage={errors?.email?.message}
                autoCapitalize="none"
                autoCompleteType="email"
                returnKeyLabel="next"
                returnKeyType="next"
              />
            )}
          />

          <Controller
            defaultValue={userProfile && userProfile.fullName}
            name="fullName"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                icon="user"
                placeholder="Enter your Name"
                onChangeText={(text) => onChange(text)}
                value={value}
                error={errors.fullName}
                errorMessage={errors?.fullName?.message}
                autoCapitalize="none"
                returnKeyLabel="next"
                returnKeyType="next"
              />
            )}
          />

          <Controller
            defaultValue={userProfile && userProfile.address}
            name="address"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                icon="map-pin"
                placeholder="Enter your Address"
                onChangeText={(text) => onChange(text)}
                value={value}
                error={errors.address}
                errorMessage={errors?.address?.message}
                autoCapitalize="none"
                returnKeyLabel="next"
                returnKeyType="next"
              />
            )}
          />

          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              label="Save Profile"
              onPress={handleSubmit(onSubmit)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
