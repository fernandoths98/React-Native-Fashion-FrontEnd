import { createContext, useState } from "react";
import { getTokenFor } from "../authentication/authentication.service";
import { addTransactionHistoryMethod, getTransactionHistoryMethod } from "./transaction.service";

export const TransactionContext = createContext({});

export const TransactionContextProvider = ({ children }: any) => {
  const [transaction, setTransaction] = useState(null);

  const getTransactionHistory = async () => {
    return new Promise<void>(async (resolve, reject) => {
      const access_tokens = await getTokenFor("aToken");
      await getTransactionHistoryMethod(access_tokens)
        .then((res: any) => {
          setTransaction(res.data);
          resolve()
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const addTransactionHistory = async (data: any) => {
    return new Promise<void>(async (resolve, reject) => {
      const access_tokens = await getTokenFor("aToken");
      await addTransactionHistoryMethod(access_tokens, data)
        .then(() => {
          
          resolve()
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  return (
    <TransactionContext.Provider
      value={{
        getTransactionHistory,
        transaction,
        addTransactionHistory,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
