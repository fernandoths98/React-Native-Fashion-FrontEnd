import { createContext, useEffect, useState } from "react";
import { database } from "../mock/product";
import { productRequest, searchProduct } from "./product.service";

export const ProductsContext = createContext({}); //variable yang dibikin global, diliat dari app untuk membuat context

export const ProductsContextProvider = ({ children }: any) => {
  //children adalah sebuah function yang akan dijalankan
  const [products, setProducts] = useState([]);
  const [keywords, setKeywords] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeywords) => {
    return new Promise(async (resolve, reject) => {
      await searchProduct(searchKeywords)
        .then((res) => {
          setKeywords(searchKeywords);
          setIsLoading(false);
          resolve(res);
        })
        .catch((err: any) => {
          setError(err);
          reject(err);
        });
    });
  };

  useEffect(() => {
    if (!keywords.length) {
      return;
    }
    productRequest()
      .then((sea: any) => {
        // console.log(sea)
        setProducts(sea);
      })
      .catch((err: any) => {
        setError(err);
      });
  }, [keywords]);

  const resultProduct = () => {
    return new Promise(async (resolve, reject) => {
      await productRequest()
        .then((res: any) => {
          setProducts(res);
          resolve(res);
        })
        .catch((err: any) => {
          setError(err);
          reject(err);
        });
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        resultProduct,
        products,
        search: onSearch,
        keywords,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
