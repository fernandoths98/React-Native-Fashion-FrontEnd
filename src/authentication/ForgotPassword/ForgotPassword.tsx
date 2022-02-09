import React from "react";
import { Alert, View } from "react-native";
import { Button, Container } from "../../components";
import { AuthNavigationProps } from "../../components/Navigation";
import { Box, Text } from "../../components/Theme";
import { Footer } from "../components/Footer";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextInput } from "../components/Form/TextInput";

export const ForgotPassword = ({
  navigation,
}: AuthNavigationProps<"ForgotPassword">) => {

  //Validasi form
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Email is not valid"),
  });

  // React Hook Form
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(formSchema) });

  const onSubmit = (data: any) => {
    // console.log(data);
  };

  const footer = (
    <Footer
      title="Don't work?"
      action="Try another way"
      onPress={() => {
        Alert.alert("Coming Soon");
      }}
    />
  );

  return (
    <Container pattern={0} {...{ footer }}>
      <Box padding="xl" flex={1} justifyContent="center">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>
        <Controller
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

        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Reset Password"
            onPress={() => navigation.navigate("PasswordChanges")}
          />
        </Box>
      </Box>
    </Container>
  );
};
