import React, { useContext } from "react";
import { Button, Container, Text } from "../components";
import { Box } from "../components/Theme";
import { TextInput } from "./components/Form/TextInput";

import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthNavigationProps } from "../components/Navigation";
import { Footer } from "./components/Footer";
import { AuthenticationContext } from "../utility/authentication/authentication.context";
import { ScrollView } from "react-native";

export const SignUp = ({ navigation }: AuthNavigationProps<"SignUp">) => {
  const SignUpschema = yup.object().shape({
    email: yup.string().email("Emailnya yang bener ya!").required(), //email("Pesan Email")
    password: yup.string().min(8).max(32).required("Passwordnya harus di isi"),
    fullName: yup.string().min(4).max(20).required(),
    address: yup.string().min(10).max(30).required(),
    retypedPasswords: yup
      .string()
      .required("Passwordnya harus sama yah!")
      .oneOf([yup.ref("password")], "Passwordnya tidak sama!"),
  });

  const { onAuthRegister }: any = useContext(AuthenticationContext);

  const onSubmitSignUp = async (data: any) => {
    // console.log(data);
    await onAuthRegister(data)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((err: any) => {
        // console.log(err);
      });
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
        <ScrollView showsVerticalScrollIndicator={false}>
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
            name="retypedPasswords"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                icon="lock"
                placeholder="Retyped your Password"
                onChangeText={(text) => onChange(text)}
                value={value}
                error={errors.retypedPasswords}
                errorMessage={errors?.retypedPasswords?.message}
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
        </ScrollView>
      </Box>
    </Container>
  );
};
