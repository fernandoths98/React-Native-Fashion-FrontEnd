import React from 'react';
import { Button, Container, RoundedIcon } from '../../components';
import { AuthNavigationProps} from '../../components/Navigation';
import { Box, Text } from '../../components/Theme';
import ButtonClose from '../components/ButtonClose';



const SIZE = 80;

export const PasswordChanges = ({ navigation }: AuthNavigationProps<"PasswordChanges">) => {
  return (
    <Container pattern={1}
      footer={
        <Box flexDirection="row" justifyContent="center" padding="s">
          <ButtonClose onPress={() => navigation.pop()} />
        </Box>
      }
    >
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        paddingHorizontal="xl"
        style={{ marginTop: -30 }}
      >

        <RoundedIcon 
        name="check" 
        size={SIZE} 
        backgroundColor="primary" color="primary" iconRatio={0.5} />
        <Text variant="title1" textAlign="center" marginBottom="m">
          Your password has successfully changed
        </Text>
        <Text textAlign="center" variant="body" marginBottom="l">
          Close this window and login again
        </Text>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Log in"
            onPress={() => navigation.navigate("Login")}
          />
        </Box>
      </Box>
    </Container>
  );
};