import Action from "../actions";

export interface IItem {
  _id: string;
  brand: string;
  model: string;
  price: number;
  category: string;
}

export interface ICartItem {
  item: IItem;
  count: number;
}

export type ICartReducerState = ICartItem[];

const reducer = (state: ICartReducerState, action: Action): ICartReducerState => {
  switch (action.type) {
    case "SET_CART":
      return action.payload;
    case "ADD_TO_CART": {
      const cart = [...state];
      const itemIndex = cart.findIndex((e) => e.item._id === action.payload.item._id);
      if (itemIndex != -1) {
        cart[itemIndex] = { ...cart[itemIndex], ...action.payload };

        return cart;
      } else {
        return [...cart, action.payload];
      }
    }
    case "CHANGE_IN_CART": {
      const cart = [...state];
      const itemIndex = cart.findIndex((e) => e.item._id === action.payload.item._id);
      cart[itemIndex] = { ...cart[itemIndex], ...action.payload };
      return cart;
    }
    case "DELETE_FROM_CART": {
      const cart = [...state];
      const itemIndex = cart.findIndex((e) => e.item._id == action.payload);
      cart.splice(itemIndex, 1);
      return cart;
    }
    default:
      return state;
  }
};

export default reducer;
