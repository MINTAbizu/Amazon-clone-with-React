export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
    console.log(action)
  switch (action.type) {
    
    case 'Addtobasket':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

      case 'removebasket':
        const index=state.basket.findIndex(
          (basketItem)=>basketItem.id===action.id);

          let newbasket=[...state.basket];

          if (index >=0){
            newbasket.splice(index,1)
          }else{
            console.warn(
              `can not remove (id:${action.id}as it is not in basket)`
            )
          }

          return{
            ...state,
            basket:newbasket,
          }

       
    default:
      return state;
  }
};

export default reducer;