import React, { createContext, useState } from 'react';

export const FavouritesContext = createContext({})

export const FavouritesContextProvider = ({ children}: any) => {

    const [favourites, setFavourites] = useState([])

    const add = (outfit) => {
        setFavourites([...favourites, outfit])
    };

    const remove = (outfit) => {
        const newFavourites = favourites.filter(
            (x) => x.id !== outfit.id
        )

        setFavourites(newFavourites)
    }

    return (
        <FavouritesContext.Provider value={{
            favourites,
            addToFavourites: add,
            removeFromFavourites: remove,
        }}
        >{children}</FavouritesContext.Provider>
    )
}