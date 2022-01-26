import React, { useRef } from "react";
import { Button, Container, Text } from "../components";
import { Box } from "../components/Theme";
import { TextInput } from "./components/Form/TextInput";

import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  AuthNavigationProps,
} from "../components/Navigation";
import { Footer } from "./components/Footer";

export const SignUp = ({
  navigation,
}: AuthNavigationProps<"SignUp">) => {
  const SignUpschema = yup.object().shape({
    email: yup.string().email("Emailnya yang bener ya!").required(), //email("Pesan Email")
    password: yup.string().min(8).max(32).required("Passwordnya harus di isi"),
    Retypedpassword: yup
      .string()
      .required("Passwordnya harus sama yah!")
      .oneOf([yup.ref("password")], "Passwordnya tidak sama!"),
  });
  const onSubmitSignUp = (data: any) => {
    navigation.navigate("Login");
    console.log(data);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(SignUpschema),
  });

  const footer = (
    <Footer
      title="Already have an account? "
      action=" Login here"
      onPress={() => navigation.navigate("Login")}
    />
  );

  return (
    <Container pattern={1} {...{ footer }}>
      <Box padding="xl" flex={1} justifyContent="center">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Create account
        </Text>
        <Text variant="body" textAlign="center">
          Let's us know what your name, email, and your password
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

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              icon="lock"
              placeholder="Enter your Password"
              onChangeText={(text) => onChange(text)}
              value={value}
              error={errors.password}
              errorMessage={errors?.password?.message}
              autoCapitalize="none"
              autoCompleteType="password"
              returnKeyLabel="next"
              returnKeyType="next"
              secureTextEntry
            />
          )}
        />

        <Controller
          name="Retypedpassword"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              icon="lock"
              placeholder="Retyped your Password"
              onChangeText={(text) => onChange(text)}
              value={value}
              error={errors.Retypedpassword}
              errorMessage={errors?.Retypedpassword?.message}
              autoCapitalize="none"
              autoCompleteType="password"
              returnKeyLabel="go"
              returnKeyType="go"
              secureTextEntry
            />
          )}
        />

        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Create Account"
            onPress={handleSubmit(onSubmitSignUp)}
          />
        </Box>
      </Box>
    </Container>
  );
};
