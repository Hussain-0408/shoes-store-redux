
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actionTypes";

const initialState = {
  items: [],
  totalAmount: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.name === item.name);

      let updatedItems;
      if (existingItem) {
        updatedItems = state.items.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updatedItems = [...state.items, { ...item, quantity: 1 }];
      }

      const totalAmount = updatedItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );

      return { ...state, items: updatedItems, totalAmount };
    }



    case REMOVE_FROM_CART: {
      const name = action.payload;
      const updatedItems = state.items.filter((i) => i.name !== name);
      const totalAmount = updatedItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
      return { ...state, items: updatedItems, totalAmount };
    }



    case CLEAR_CART:
      return { items: [], totalAmount: 0 };

    default:
      return state;
  }
};
