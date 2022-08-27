import { ICartItem } from "../reducers/cartReducer";

type Action =
  | { type: "SET_CART"; payload: ICartItem[] }
  | { type: "ADD_TO_CART"; payload: ICartItem }
  | { type: "CHANGE_IN_CART"; payload: ICartItem }
  | { type: "DELETE_FROM_CART"; payload: string }
  | { type: "LOG_OUT" }
  | { type: "LOG_IN" };

export * as actionCreators from "./actionCreators";

export default Action;
