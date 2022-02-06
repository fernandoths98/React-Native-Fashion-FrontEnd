import { instance } from "..";
import * as SecureStore from 'expo-secure-store';

//untuk mengambil token
export const getTokenFor = async (key: any): Promise<any> => {
    let res = await SecureStore.getItemAsync(key);
    if (res) {
        return res
    } else {
        //untuk pesan tidak ada token yang tersimpan
        alert('No values stored under that key.');
    }
}

//untuk menyimpan token pada secure store
export const save = async (key: any, value: any): Promise<any> => {
    await SecureStore.setItemAsync(key, value)
}

export const loginAuth = (authLogin: any) => {
  console.log(authLogin);
  return new Promise(async (resolve, reject) => {
    await instance
      .post("login", authLogin)
      .then((res) => {
        console.log(res);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const registerAuth = (authRegister: any) => {
  console.log(authRegister);
  return new Promise(async (resolve, reject) => {
    await instance
      .post("register", authRegister)
      .then((res) => {
        console.log(res);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
