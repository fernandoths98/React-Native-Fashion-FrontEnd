import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Text } from '../../components/Theme';

interface FooterCloseButtonProps {
    onPress: () => void;
  }
  
  const SIZE = 60;
  
  const FooterCloseButton = ({ onPress }: FooterCloseButtonProps) => {
    return (
      <RectButton onPress={onPress}>
        <Box
          backgroundColor="white"
          justifyContent="center"
          alignItems="center"
          style={{ height: SIZE, width: SIZE, borderRadius: SIZE }}
        >
            <Text color="secondary">
          <Icon name="x" size={30} />
  
            </Text>
        </Box>
      </RectButton>
    );
  };
  
  export default FooterCloseButton;