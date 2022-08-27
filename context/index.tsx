import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import Action from "./actions";
import { logIn, logOut, setCart } from "./actions/actionCreators";
import mainReducer from "./reducers";
import { IMainReducerState } from "./reducers";
import Axios, { baseURL } from "../config/axiosInstance";
import axios from "axios";
import { useRouter } from "next/router";
import Router from "next/router";

interface AppContext {
  state: IMainReducerState;
  dispatch: Dispatch<Action>;
  useCheckAuthentification: (reverse?: boolean) => void;
}

const initialState = {
  loggedIn: null,
  cart: [],
};

const AppContext = createContext<AppContext>({
  state: initialState,
  dispatch: () => {},
  useCheckAuthentification: (reverse: boolean = false) => {},
});

export const AppContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const useCheckAuthentification = (reverse: boolean = false) => {
    const router = useRouter();
    const { state } = useContext(AppContext);

    useEffect(() => {
      if (reverse) {
        if (state.loggedIn === true) {
          router.push("/");
        }
      } else if (state.loggedIn === false) {
        router.push("/auth");
      }
    }, [router, reverse, state.loggedIn]);
  };

  const deauthentificate = useCallback(() => {
    dispatch(logOut());
    dispatch(setCart([]));
    Router.push("/auth");
  }, [dispatch]);

  const fetchCartData = useCallback(async () => {
    try {
      const { data } = await axios.get(`${baseURL}cart`, { withCredentials: true });
      dispatch(setCart(data));
      dispatch(logIn());
    } catch (e) {
      if (axios.isAxiosError(e) && e.response && e.response.status === 401) {
        dispatch(logOut());
      }
    }
  }, [dispatch]);

  useEffect(() => {
    Axios.interceptors.response.use(
      (response) => response,
      (e) => {
        if (axios.isAxiosError(e) && e.response && e.response.status === 401) {
          deauthentificate();
          return Promise.reject();
        }
        return Promise.reject(e);
      }
    );
  }, [deauthentificate]);

  useEffect(() => {
    if (state.loggedIn == undefined || state.loggedIn == true) {
      fetchCartData();
    }
  }, [state.loggedIn, fetchCartData]);

  return (
    <AppContext.Provider value={{ state, dispatch, useCheckAuthentification }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
