import { createContext, useState } from "react";
import { database } from "./mock/product";
import { productRequest } from "./product.service";

export const ProductsContext = createContext({}); //variable yang dibikin global, diliat dari app untuk membuat context

export const ProductsContextProvider = ({ children }: any) => { //children adalah sebuah function yang akan dijalankan
  const [products, setProducts] = useState(database);

  const retiveProducts = () => {
    return new Promise<void>(async (resolve, reject) => {
      const data = productRequest();

      setProducts(data);
      resolve();
    });
  };

  return (
    <ProductsContext.Provider value={{ retiveProducts, products }}>
      {children}
    </ProductsContext.Provider>
  );
};
