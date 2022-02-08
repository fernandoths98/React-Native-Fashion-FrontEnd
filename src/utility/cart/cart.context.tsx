import { createContext, useState } from "react";
import { getTokenFor } from "../authentication/authentication.service";
import { addToCartMethod, getCartById } from "./cart.service";

export const CartContext = createContext({})

export const CartContextProvider = ({ children }: any) => {
    const [cart, setCart] = useState(null)
    const [error, setError] = useState(null)

    // console.log(cart)
    const getCart = async () => {
        return new Promise<void>(async (resolve, reject) => {
            const access_tokens = await getTokenFor("aToken")
            await getCartById(access_tokens)
                .then((res: any) => {
                    setCart(res.data)
                    // console.log("test")
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    const addToCart = async (data: any) => {
        return new Promise<void>(async (resolve, reject) => {
            const access_tokens = await getTokenFor("aToken")
            await addToCartMethod(access_tokens, data)
                .then((res: any) => {
                    setCart(res.data)
                    // console.log("test")
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    return (
        <CartContext.Provider
            value={{
                getCart,
                cart,
                addToCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}