import { instance } from "..";

export const getTransactionHistoryMethod = (access_tokens: any) => {
    return new Promise(async (resolve, reject) => {
      await instance
        .get('transaction', 
        { headers: { Authorization: `Bearer ${access_tokens}` } })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  export const addTransactionHistoryMethod = (access_tokens: any, data: any) => {
    return new Promise(async (resolve, reject) => {
      await instance
        .post('transaction/add', data,  
        { headers: { Authorization: `Bearer ${access_tokens}` } })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };