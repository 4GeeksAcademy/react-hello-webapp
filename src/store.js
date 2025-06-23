// src/store.js
import React, { useState } from "react";

const Context = React.createContext();

const StoreProvider = ({ children }) => {
    const [store, setStore] = useState({
        favorites: JSON.parse(localStorage.getItem("favorites")) || []
    });

    const getStore = () => store;
    const setStore = (updatedStore) => setStore(prev => ({ ...prev, ...updatedStore }));

    const addFavorite = (item) => {
        const exists = store.favorites.some(fav => fav.uid === item.uid && fav.type === item.type);
        if (!exists) {
            const newFavorites = [...store.favorites, item];
            setStore({ favorites: newFavorites });
            localStorage.setItem("favorites", JSON.stringify(newFavorites));
        }
    };

    const removeFavorite = (uid, type) => {
        const newFavorites = store.favorites.filter(fav => !(fav.uid === uid && fav.type === type));
        setStore({ favorites: newFavorites });
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
    };

    const actions = {
        addFavorite,
        removeFavorite
    };

    return (
        <Context.Provider value={{ store, actions }}>
            {children}
        </Context.Provider>
    );
};

export { Context, StoreProvider };

