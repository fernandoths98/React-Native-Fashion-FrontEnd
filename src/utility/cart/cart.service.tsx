import { instance } from "..";

export const getCartById = (access_tokens: any) => {
    return new Promise(async (resolve, reject) => {
      await instance
        .get('cart', 
        { headers: { Authorization: `Bearer ${access_tokens}` } })
        .then((res) => {
          // console.log(res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  export const addToCartMethod = (access_tokens: any, data:any) => {
    return new Promise(async (resolve, reject) => {
      await instance
        .post('cart',data,
        { headers: { Authorization: `Bearer ${access_tokens}` } })
        .then((res) => {
          // console.log(res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
