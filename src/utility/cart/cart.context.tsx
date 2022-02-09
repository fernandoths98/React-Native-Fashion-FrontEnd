import { createContext, useState } from "react";
import { getTokenFor } from "../authentication/authentication.service";
import { addToCartMethod, deleteCartByIdMethod, editQuantityMethod, getCartById, getCartByIdMethod } from "./cart.service";

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

    const getCartId = async (idCart: any) => {
        // console.log("idCart", idCart)
        return new Promise<void>(async (resolve, reject) => {
            const access_tokens = await getTokenFor("aToken")
            await getCartByIdMethod(access_tokens, idCart)
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

    const deleteCartId = async (idCart: any) => {
        // console.log("idCart", idCart)
        return new Promise<void>(async (resolve, reject) => {
            const access_tokens = await getTokenFor("aToken")
            await deleteCartByIdMethod(access_tokens, idCart)
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

    const editQuantity = async (data: any) => {
        return new Promise<void>(async (resolve, reject) => {
            // console.log("data cie", data)
            const cartId = data.cartId
            const passingDataQuantity = {quantity: data.quantity}
            const access_tokens = await getTokenFor("aToken")
            await editQuantityMethod(access_tokens, cartId, passingDataQuantity)
                .then(() => {
                    // console.log("test")
                    resolve()
                })
                .catch((err) => {
                    // console.log("Edit Error",err)
                    reject(err)
                })
        })
    }

    return (
        <CartContext.Provider
            value={{
                getCart,
                cart,
                addToCart,
                editQuantity,
                getCartId,
                deleteCartId
            }}
        >
            {children}
        </CartContext.Provider>
    )
}