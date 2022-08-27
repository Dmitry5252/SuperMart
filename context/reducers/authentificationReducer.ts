import Action from "../actions";

export type IAuthentificationReducerState = boolean | null;

const reducer = (state: IAuthentificationReducerState, action: Action) => {
  switch (action.type) {
    case "LOG_IN":
      return true;
    case "LOG_OUT":
      return false;
    default:
      return state;
  }
};

export default reducer;
