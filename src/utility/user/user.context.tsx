import { createContext, useEffect, useState } from "react";
import { getTokenFor } from "../authentication/authentication.service";
import { getUserById } from "./user.service";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }: any) => {
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);

  const getUserId = async () => {
    return new Promise<void>(async (resolve, reject) => {
      const access_tokens = await getTokenFor("aToken");
      await getUserById(access_tokens)
        .then((res: any) => {
          setUserProfile(res.data);
          // console.log(res);
          resolve();
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
        userProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
