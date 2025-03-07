import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helpers/helper";
const CartContext = createContext();

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        selectedItems: [...state.selectedItems],
        ...sumProducts(state.selectedItems),
        checkout: false,
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
      };
    case "INCREASE_ITEM":
      const incIndex = state.selectedItems.findIndex((item) => item.id === action.payload.id);
      state.selectedItems[incIndex].quantity++;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "DECREASE_ITEM":
      const decIndex = state.selectedItems.findIndex((item) => item.id === action.payload.id);
      state.selectedItems[decIndex].quantity--;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    default:
      throw new Error("Invalid Action");
  }
};
export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}

const useCart = () => {
  console.log(useContext(CartContext));
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};
export { useCart };
