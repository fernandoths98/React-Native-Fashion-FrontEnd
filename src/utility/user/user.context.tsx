import { createContext, useEffect, useState } from "react";
import { getUserById } from "./user.service";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }: any) => {
  const [userId, setUserID] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    getUserId(userId)
      .then((res: any) => {
        console.log(res);
        setUserID(res);
      })
      .catch((err: any) => {
        setError(err);
      });
  }, []);

  const getUserId = (userId) => {
    return new Promise(async (resolve, reject) => {
      await getUserById(userId)
        .then((res: any) => {
          setUserID(userId);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  return (
    <UserContext.Provider
      value={{
        getUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
