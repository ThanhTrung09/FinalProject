const initialState = {
  products: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CART":
      console.log(action.data)
      const isExist = state.products?.find(e => e._id === action.data?._id)
      const productList = isExist
        ? state.products?.map(e => e._id === action.data._id ? ({ ...e, quantity: e.quantity + 1 }) : e)
        : [...state.products, action.data]

      return {
        products: productList
      };

    case 'CHANGE_QUANTITY':
      const isReduce = action.changeQuantityType === 'reduce'
      const productChangeQuantity = state.products?.map(e => e._id === action.data._id ? ({ ...e, quantity: isReduce ? (e.quantity - 1) : (e.quantity + 1) }) : e)
      return {
        products: productChangeQuantity
      };

    case 'REMOVE_ITEM':
      return {
        products: state.products?.filter(e => e?._id !== action.data?._id)
      }
    case 'REMOVE_ALL':
      return {
        products: []
      }

    default:
      return state;
  }
}