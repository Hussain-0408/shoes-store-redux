
import { ADD_TO_CART, DecreaseCart, IncreaseCart } from "../actionTypes";

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

    case IncreaseCart: {
      const itemName = action.payload;
      const updatedItems = state.items.map((i) =>
        i.name === itemName ? { ...i, quantity: i.quantity + 1 } : i
      );
      const totalAmount = updatedItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );

      return { ...state, items: updatedItems, totalAmount };
    }

    case DecreaseCart: {
      const itemName = action.payload;
      let updatedItems = state.items.map((i) =>
        i.name === itemName ? { ...i, quantity: i.quantity - 1 } : i
      );
      
      updatedItems = updatedItems.filter((i) => i.quantity > 0);

      const totalAmount = updatedItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );

      return { ...state, items: updatedItems, totalAmount };
    }


    default:
      return state;
  }



};



