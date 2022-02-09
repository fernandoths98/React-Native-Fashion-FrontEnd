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

  export const editQuantityMethod = (access_tokens: any, idCart:number, data:any) => {
    // console.log("data",data);
    return new Promise(async (resolve, reject) => {
      await instance
        .patch(`cart/editQty/${idCart}`,data,
        { headers: { Authorization: `Bearer ${access_tokens}` } })
        .then((data: any) => {
          // console.log(res);
          resolve(data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  };

  export const getCartByIdMethod = (access_tokens: any, idCart:any) => {
    return new Promise(async (resolve, reject) => {
      await instance
        .get(`cart/${idCart}`,
        { headers: { Authorization: `Bearer ${access_tokens}` } })
        .then((data: any) => {
          // console.log(res);
          resolve(data);
        })
        .catch((err: any) => {
          reject(err);
        });
    })
  }

  export const deleteCartByIdMethod = (access_tokens: any, idCart:any) => {
    return new Promise(async (resolve, reject) => {
      await instance
        .delete(`cart/${idCart}`,
        { headers: { Authorization: `Bearer ${access_tokens}` } })
        .then((data: any) => {
          // console.log(res);
          resolve(data);
        })
        .catch((err: any) => {
          reject(err);
        });
    })
  }
