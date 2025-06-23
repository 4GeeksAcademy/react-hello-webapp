import React, { useState, useEffect, createContext } from "react";

export const Context = createContext();

export const StoreProvider = ({ children }) => {
  const [store, setStore] = useState({
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    people: [],
    planets: [],
    vehicles: []
  });

  // Cargar datos desde la API
  const loadData = async () => {
    try {
      const [peopleRes, planetsRes, vehiclesRes] = await Promise.all([
        fetch("https://www.swapi.tech/api/people"),
        fetch("https://www.swapi.tech/api/planets"),
        fetch("https://www.swapi.tech/api/vehicles")
      ]);
      const peopleData = await peopleRes.json();
      const planetsData = await planetsRes.json();
      const vehiclesData = await vehiclesRes.json();

      setStore(prev => ({
        ...prev,
        people: peopleData.results || [],
        planets: planetsData.results || [],
        vehicles: vehiclesData.results || []
      }));
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  // Añadir favorito sin duplicados
  const addFavorite = (item) => {
    const exists = store.favorites.some(fav => fav.uid === item.uid && fav.type === item.type);
    if (!exists) {
      const newFavorites = [...store.favorites, item];
      setStore(prev => ({ ...prev, favorites: newFavorites }));
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };

  // Remover favorito
  const removeFavorite = (uid, type) => {
    const newFavorites = store.favorites.filter(fav => !(fav.uid === uid && fav.type === type));
    setStore(prev => ({ ...prev, favorites: newFavorites }));
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Context.Provider value={{ store, actions: { addFavorite, removeFavorite, loadData } }}>
      {children}
    </Context.Provider>
  );
};
