import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode, useCallback, useContext } from "react";
import { Alert, Dimensions, StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";
import RoundedIconButton from "../../components/RoundedIconButton";

import theme, { aspectRatio, Box, Text } from "../../components/Theme";
import { CartContext } from "../../utility/cart/cart.context";

interface SwipeableRowsProps {
  children: ReactNode;
  onDelete: () => void;
  height: number;
  addQty: any;
  removeQty: any;
  cartId: number;
}

const { width } = Dimensions.get("window");
const finalDestination = width;
const editWidth = 85 * aspectRatio;
const snapPoints = [-editWidth, 0, finalDestination];

export const SwipeableRows = ({
  children,
  onDelete,
  height: defaultHeight,
  addQty,
  removeQty,
  cartId,
}: SwipeableRowsProps) => {

  const height = useSharedValue(defaultHeight);

  const {editQuantity, getCartId}: any = useContext(CartContext);
  


  const editQuantityCart = async (qty: any) => {
    
    const currentQty = await getCartId(cartId)
    .then((res:any) => {
      return res.data.quantity;
    }).catch((err: any) => {
      console.error(err);
    });

    // console.log("currentQty",currentQty);


    let reqData;
    if (qty === "add") {
      reqData = { cartId: cartId, quantity: currentQty + 1 };
    } else if (qty === "min") {
      reqData = { cartId: cartId, quantity: currentQty - 1 };
    }

    await editQuantity(reqData);
  }


  const deleteItem = useCallback(() => {
    onDelete();
  }, [onDelete]);
  
  const translateX = useSharedValue(0);
  
  const onGestureEvent = useAnimatedGestureHandler<{ x: number }>({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: ({ translationX }, ctx) => {
      translateX.value = ctx.x + translationX;
    },
    onEnd: ({ velocityX }) => {
      const dest = snapPoint(translateX.value, velocityX, snapPoints);
      translateX.value = withSpring(
        dest,
        {
          overshootClamping: true,
        },
        () => {
          if (dest === finalDestination) {
            height.value = withTiming(0, { duration: 250 }, () =>
              runOnJS(onDelete)()
            );
          }
        }
      );
    },
  });
  const style = useAnimatedStyle(() => ({
    height: height.value,
    backgroundColor: theme.colors.white,
    transform: [{ translateX: translateX.value }],
  }));
  const deleteStyle = useAnimatedStyle(() => ({
    opacity: translateX.value > 0 ? 1 : 0,
  }));
  const editStyle = useAnimatedStyle(() => ({
    opacity: translateX.value < 0 ? 1 : 0,
  }));

  return (
    <View>
      <Animated.View style={[StyleSheet.absoluteFill, deleteStyle]}>
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={[theme.colors.danger, theme.colors.background]}
          start={[0, 0.5]}
          end={[1, 0.5]}
        />
        <Box
          flex={1}
          justifyContent="space-evenly"
          width={editWidth}
          alignItems="center"
        >
          <Text color="white" variant="title3">
            Remove
          </Text>
        </Box>
      </Animated.View>
      <Animated.View style={[StyleSheet.absoluteFill, editStyle]}>
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={[theme.colors.edit, theme.colors.background]}
          start={[1, 0.5]}
          end={[0.8, 0.5]}
        />
        <Box
          flex={1}
          justifyContent="space-evenly"
          width={editWidth}
          alignSelf="flex-end"
          alignItems="center"
        >
          <RoundedIconButton
            onPress={() => {
              addQty();
              editQuantityCart("add");
            }}
            name="plus"
            size={24}
            color="background"
            backgroundColor="primary"
          />
          <RoundedIconButton
            onPress={() => {
              editQuantityCart("min");
              removeQty();
              
            }}
            name="minus"
            size={24}
            color="background"
            backgroundColor="danger"
          />
        </Box>
      </Animated.View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={style}>{children}</Animated.View>
      </PanGestureHandler>
    </View>
  );
};
