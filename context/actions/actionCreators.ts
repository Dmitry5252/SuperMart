import { ICartItem } from "../reducers/cartReducer";

export const setCart = (payload: ICartItem[]): { type: "SET_CART"; payload: ICartItem[] } => ({
  type: "SET_CART",
  payload,
});

export const addToCart = (payload: ICartItem): { type: "ADD_TO_CART"; payload: ICartItem } => ({
  type: "ADD_TO_CART",
  payload,
});

export const changeInCart = (
  payload: ICartItem
): { type: "CHANGE_IN_CART"; payload: ICartItem } => ({
  type: "CHANGE_IN_CART",
  payload,
});

export const deleteFromCart = (payload: string): { type: "DELETE_FROM_CART"; payload: string } => ({
  type: "DELETE_FROM_CART",
  payload,
});

export const logOut = (): { type: "LOG_OUT" } => ({ type: "LOG_OUT" });

export const logIn = (): { type: "LOG_IN" } => ({ type: "LOG_IN" });
