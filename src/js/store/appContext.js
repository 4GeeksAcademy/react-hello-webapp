import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]); // Cambio aquí

  const addToFavorites = (character) => {
    setFavorites((prevFavorites) => [...prevFavorites, character]);
  };
  const removeFromFavorites = (character) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favCharacter) => favCharacter.url !== character.url)
    );
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };