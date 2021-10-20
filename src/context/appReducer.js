import appActions from './appActions';

export const initialState = {
  cart: [],
  buyer: {},
  products: [],
};

export const appReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case appActions.LOAD_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case appActions.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case appActions.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== payload.id),
      };

    case appActions.ADD_TO_BUYER:
      console.log('reducer: ', payload);
      return {
        ...state,
        buyer: payload,
      };

    default:
      return {
        ...state,
      };
  }
};
