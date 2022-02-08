import { instance } from "..";

export const getUserById = (access_tokens: any) => {
  return new Promise(async (resolve, reject) => {
    await instance
      .get('user/users/', 
      { headers: { Authorization: `Bearer ${access_tokens}` } })
      .then((user) => {
        // console.log(user);
        resolve(user);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
