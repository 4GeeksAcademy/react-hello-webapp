const getState = () => {
	return {
	  store: {
		favorites: [],
	  },
	  actions: {
		addToFavorites: (character) => {
		  const currentStore = getState().store;
		  const updatedFavorites = [...currentStore.favorites, character];
		  return { ...currentStore, favorites: updatedFavorites };
		},
		removeFromFavorites: (character) => {
		  const currentStore = getState().store;
		  const updatedFavorites = currentStore.favorites.filter(
			(fav) => fav !== character
		  );
		  return { ...currentStore, favorites: updatedFavorites };
		},
	  },
	};
  };
  
  export default getState;
  
