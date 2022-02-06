import { instance } from "../index";

export const productRequest = () => {
  return new Promise(async (resolve, reject) => {
    await instance
      .get("product")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const searchProduct = (searchKeywords: any) => {
  return new Promise(async (resolve, reject) => {
    await instance
      .get(`product/search/${searchKeywords}`)
      .then((search) => {
        resolve(search.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
