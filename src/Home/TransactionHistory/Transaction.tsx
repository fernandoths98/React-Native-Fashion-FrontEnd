import React from "react";
import moment from "moment";
import { DataPoint } from "./Graph";
import { Box, Text } from "../../components/Theme";

interface TransactionProps {
  transaction: any;
}

const Transaction = ({ transaction}: TransactionProps) => {
  return (
    <Box
      flexDirection="row"
      marginTop="l"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Box flexDirection="row" alignItems="center" marginBottom="s">
          <Box
            backgroundColor={transaction.color}
            marginRight="s"
            style={{ width: 10, height: 10, borderRadius: 5 }}
          />
          <Text variant="title3">Transaction ID : {transaction.id_transaction}</Text>
        </Box>
        <Text color="info">
          {`$${transaction.total_price} - ${moment(transaction.currentDate).format(
            "MMMM DD, YYYY"
          )}`}
        </Text>
      </Box>
      
    </Box>
  );
};

export default Transaction;
