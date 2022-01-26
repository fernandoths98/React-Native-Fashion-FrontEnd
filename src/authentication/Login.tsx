import React from "react";
import { View } from "react-native";
import { Button, Container, Text } from "../components";
import { Box } from "../components/Theme";
import { TextInput } from "./components/Form/TextInput";

import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { SocialLogin } from "./components/SocialLogin";
import {
  AuthNavigationProps,
} from "../components/Navigation";
import { Footer } from "./components/Footer";
import { ForgotPassword } from "./ForgotPassword/ForgotPassword";
import { CompositeNavigationProp } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import axios from "axios";

//AuthNavigasiProps = diambil dari navigasi untuk proses pindah page/halaman
export const Login = ({ navigation }: AuthNavigationProps<"Login">) => {
  //Validasi Form
  const schema = yup.object().shape({
    email: yup.string().email("Emailnya yang bener bos!").required(), //email("Pesan Email")
    password: yup.string().min(8).max(32).required(),
  });

  const onSubmit = async (data: any) => {

    // Deklarasi variable stringData
    // const stringData = JSON.stringify({
    //   "email": data.email,
    //   "password": data.password
    // })

    //keyboardavoidingkey
  // Method pemanggilan axios
  //  await axios({
  //     method: "POST",
  //     url: "http://192.168.100.11:3000/api/login",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //       data: stringData
  //   }).then((data) => {
  //     navigation.navigate("Home");
  //     console.log(data);
  //   }).catch((err) => {
  //     console.log(err);
  //   })

    // await axios
    //   .post("http://192.168.100.11:3000/api/login", {
    //     data:stringData
    //   },{
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //   })
    //   .then((data) => {
    //     navigation.navigate("Home");
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log("oaskdoakows", err);
    //     console.log(err);
    //   });
    navigation.navigate("Home");
    console.log(axios);
  };

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const footer = (
    <Footer
      title="Don't have an account? "
      action=" Sign Up Here"
      onPress={() => navigation.navigate("SignUp")}
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
              returnKeyLabel="go"
              returnKeyType="go"
              secureTextEntry
            />
          )}
        />
        <Box flexDirection="row" justifyContent="center">
          <Button variant="transparant" onPress={() => navigation.navigate("ForgotPassword")}>
            <Text color="primary"> Forgot Password </Text>
          </Button>
        </Box>

        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Log Into your account"
            onPress={handleSubmit(onSubmit)}
          />
        </Box>
      </Box>
    </Container>
  );
};
