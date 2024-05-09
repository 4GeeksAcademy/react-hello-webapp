export const initialStore=()=>{
  return{
    message: null,
    demo: [
      {
        title: "FIRST",
        background: "white",
        initial: "white"
      },
      {
        title: "SECOND",
        background: "white",
        initial: "white"
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'change_color':
      return {
        ...store,
        demo: action.nextDemo
      };
    default:
      throw Error('Unknown action.');
  }    
}
