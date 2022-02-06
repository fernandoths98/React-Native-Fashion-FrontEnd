import { instance } from "..";

export const getUserById = (userId: any) => {
  return new Promise(async (resolve, reject) => {
    await instance
      .get(`user/${userId}`)
      .then((user) => {
        console.log(user.data);
        resolve(user.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
