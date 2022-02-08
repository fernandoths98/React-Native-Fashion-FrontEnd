import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Dimensions } from "react-native";
import Header from "../../components/Header";
import { HomeRoutes } from "../../components/Navigation";
import ScrollableContent from "../../components/ScrollableContent";
import { Box, Theme, Text, makeStyles } from "../../components/Theme";
import { TransactionContext } from "../../utility/transaction/transaction.context";
import Graph, { DataPoint } from "./Graph";
import Transaction from "./Transaction";



const footerHeight = Dimensions.get("window").width / 5.5;
const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  scrollView: {
    paddingBottom: footerHeight,
  },
}));

const TransactionHistory = ({
  navigation,
}: HomeRoutes<"TransactionHistory">) => {
  const styles = useStyles();
  const { transaction, getTransactionHistory }: any =
    useContext(TransactionContext);

    const [startDate, setStartDate] = useState()

    let totalSpent  = 0;
    transaction.forEach((item: any) => {
      totalSpent += item.total_price
    })

  

  useEffect(() => {
    getTransactionHistory();
  }, []);

  return (
    <ScrollableContent>
      <Box flex={1} backgroundColor="background">
        <Header
          title="Transaction History"
          left={{ icon: "arrow-left", onPress: () => navigation.openDrawer() }}
          right={{ icon: "share", onPress: () => true }}
        />
        <Box flex={1} padding="m">
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Box>
              <Text variant="title1" color="secondary" opacity={0.3}>
                TOTAL SPENT
              </Text>
              <Text variant="title1">Rp {totalSpent}</Text>
            </Box>
            <Box backgroundColor="primaryLight" borderRadius="l" padding="s">
              <Text color="primary">All Time</Text>
            </Box>
          </Box>
          
          <ScrollView
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            {transaction &&
              transaction.map((item: any, i: any) => {
                return <Transaction transaction={item} key={i} />;
              })}
          </ScrollView>
        </Box>
      </Box>
    </ScrollableContent>
  );
};

export default TransactionHistory;
