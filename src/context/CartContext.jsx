import {
  createContext,
  useContext,
  useReducer
} from "react";

const CartContext = createContext();

const initialState = {
  items: []
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.item]
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(
          item => item.id !== action.id
        )
      };

    case "CLEAR_CART":
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  const total = state.items.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}