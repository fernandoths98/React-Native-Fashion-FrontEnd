import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import { Box, Text } from '../../components/Theme';
import { SocialLogin } from './SocialLogin';

interface FooterProps {
    onPress: () => void;
    title: string;
    action: string;
}

export const Footer = ({onPress, title, action}: FooterProps) => {
    return (
        <>
      <SocialLogin />
      <Box alignItems="center" marginTop='xxl' marginBottom='xxl'>
        <BorderlessButton {...{onPress}}>
          <Text variant="button" color="white">
            <Text>{title}</Text>
            <Text color="primary">
              {action}
            </Text>
          </Text>
        </BorderlessButton>
      </Box>
    </>
    )
}