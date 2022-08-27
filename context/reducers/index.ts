import { ICartReducerState } from "./cartReducer";
import { IAuthentificationReducerState } from "./authentificationReducer";
import CartReducer from "./cartReducer";
import AuthentificationReducer from "./authentificationReducer";
import Action from "../actions";

export interface IMainReducerState {
  cart: ICartReducerState;
  loggedIn: IAuthentificationReducerState;
}

const MainReducer = (state: IMainReducerState, action: Action) => {
  return {
    cart: CartReducer(state.cart, action),
    loggedIn: AuthentificationReducer(state.loggedIn, action),
  };
};

export default MainReducer;
