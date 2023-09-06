const getState = ({ getStore, setStore }) => {
	return {
	  store: {
		formulario: [],
	  },
	  actions: {
		addCard: (newCardData) => {
		  const store = getStore();
		  const newCard = {
			cardData: {
			  fullName: newCardData.fullName,
			  email: newCardData.email,
			  phone: newCardData.phone,
			  address: newCardData.address,
			},
		  };
		  setStore({ formulario: [...store.formulario, newCard] });
		},
  
		deleteCard: (index) => {
		  const store = getStore();
		  const updatedFormulario = store.formulario.filter(
			(item, i) => i !== index
		  );
		  setStore({ formulario: updatedFormulario });
		},
  
		editCard: (index, updatedCardData) => {
		  const store = getStore();
		  const updatedFormulario = store.formulario.map((item, i) => {
			if (i === index) {
			  return {
				cardData: {
				  fullName: updatedCardData.fullName,
				  email: updatedCardData.email,
				  phone: updatedCardData.phone,
				  address: updatedCardData.address,
				},
			  };
			} else {
			  return item;
			}
		  });
		  setStore({ formulario: updatedFormulario });
		},
	  },
	};
  };
  
  export default getState;
  