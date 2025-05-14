export const initialStore=()=>{
  return{
    
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'agregar_al_carrito':

      return {};

    case 'eliminar_del_carrito':

      return {};

    default:
      throw Error('No es una accion valida');
  }    
}
