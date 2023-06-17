import React from "react";
import GlobalContext from "./GlobalContext";
import initialState from "@/app/initialState";
import reducer from "@/app/reducer";
import { IReducerTA, IStoreItem, IInitialState, IReducerT } from "@/types";
import toast from "react-hot-toast";
import useBreakpoint from "@/hooks/useBreakpoint";

interface IProps {
  children: React.ReactNode;
}

const GlobalProvider: React.FC<IProps> = ({ children }) => {
  const [storeState, dispatch]: [
    IInitialState,
    (value: IReducerTA | IReducerT) => void
  ] = React.useReducer(reducer, initialState);
  const [isNavActive, setIsNavActive] = React.useState<boolean>(false);
  const breakpoint = useBreakpoint();

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const addItem = (item: IStoreItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
    dispatch({ type: "GET_TOTALS" });
    toast.success(`${item.title} Added to Cart!`);
  };

  const removeItem = (item: IStoreItem) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
    dispatch({ type: "GET_TOTALS" });
    toast.success(`${item.title} Remove From Cart!`);
  };

  const deleteItem = (item: IStoreItem) => {
    dispatch({ type: "DELETE_ITEM", payload: item });
    dispatch({ type: "GET_TOTALS" });
    toast.success(`${item.title} Remove From Cart!`);
  };

  const clearCartItems = () => {
    if (storeState.cartItems.length) {
      dispatch({ type: "CLEAR_ITEMS" });
      dispatch({ type: "GET_TOTALS" });
      toast.success(`Cart Cleared!`);
    }
  };

  const value = {
    breakpoint,
    isNavActive,
    storeState,
    toggleCart,
    addItem,
    removeItem,
    deleteItem,
    clearCartItems,
  };

  React.useEffect(() => {
    const onWinScroll = () => {
      const scrollPY = window.pageYOffset > 30 ? true : false;
      setIsNavActive(scrollPY);
    };

    window.addEventListener("scroll", onWinScroll);
    return () => window.removeEventListener("scroll", onWinScroll);
  }, []);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
