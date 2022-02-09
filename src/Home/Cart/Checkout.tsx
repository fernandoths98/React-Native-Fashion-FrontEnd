import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Alert, ScrollView } from "react-native";
import { Button } from "../../components";
import { Box, Text } from "../../components/Theme";
import { TransactionContext } from "../../utility/transaction/transaction.context";
import { UserContext } from "../../utility/user/user.context";
import { AddCard } from "./AddCard";
import Card, { CardModel, CardType } from "./Card";
import { CARD_HEIGHT } from "./CardLayout";

const cards: CardModel[] = [
  { id: 0, type: CardType.VISA, last4Digits: "9874", expiration: "05/24" },
  {
    id: 1,
    type: CardType.MASTERCARD,
    last4Digits: "6514",
    expiration: "05/24",
  },
];

interface CheckoutProps {
  minHeight: number;
  cart: any;
  navigation: any;
}

interface LineItemProps {
  label: string;
  value: number;
}

const LineItem = ({ label, value }: LineItemProps) => {
  return (
    <Box flexDirection="row" paddingVertical="s">
      <Box flex={1}>
        <Text color="background" variant="title3">
          {label}
        </Text>
      </Box>
      <Box>
        <Text color="primary" variant="title3">
          Rp {value}
        </Text>
      </Box>
    </Box>
  );
};

export const Checkout = ({ minHeight, cart }: CheckoutProps) => {
  const navigation = useNavigation()
  
  const [selectedCard, setSelectedCard] = useState(cards[0].id);

  const { userProfile }: any = useContext(UserContext);
  const { addTransactionHistory }: any = useContext(TransactionContext);

  // console.log(cart);

  const deliveryFee = 7500;
  let totalPay = 0;
  cart.forEach((item: any) => {
    totalPay += item.price * item.quantity;
  });

  const labeltotalPay = `Total Pay: Rp. ${totalPay + deliveryFee}`;
  const totalOrder = totalPay + deliveryFee;

  const order = {
    total_price: totalOrder,
  };

  const onSubmit = async () => {
    await addTransactionHistory(order);
    Alert.alert(
      "Success",
      "Your order has been placed",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { 
          text: "OK", 
          onPress: () => navigation.navigate("TransactionHistory") }
      ]
    );
  };

  return (
    <Box flex={1} backgroundColor="bgYs" style={{ paddingTop: minHeight }}>
      <Box flex={1} padding="m">
        <Box height={CARD_HEIGHT}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <AddCard />
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                selected={selectedCard === card.id}
                onSelect={() => setSelectedCard(card.id)}
              />
            ))}
          </ScrollView>
        </Box>
        <Box marginTop="l">
          <Text color="background" variant="title3">
            Delivery Address
          </Text>
          <Box flexDirection="row" opacity={0.5} paddingVertical="m">
            <Box flex={1}>
              <Text color="background">
                {userProfile && userProfile.address}
              </Text>
            </Box>
            <Box justifyContent="center" alignItems="center">
              <Text color="background">Change</Text>
            </Box>
          </Box>
          <LineItem label="Total Items" value={cart.length} />
          <LineItem label="Standard Delivery" value={deliveryFee} />
          <LineItem label="Total Payment" value={totalPay} />
        </Box>
        <Box
          paddingVertical="m"
          flex={1}
          alignItems="center"
          justifyContent="flex-end"
        >
          <Button
            cart={cart}
            label={labeltotalPay}
            variant="primary"
            onPress={() => onSubmit()}
          />
        </Box>
      </Box>
    </Box>
  );
};
