import React from "react";
import GlobalContext from "./GlobalContext";
import initialState from "@/app/initialState";
import reducer from "@/app/reducer";
import { IItem } from "@/types";
import toast from "react-hot-toast";
import useBreakpoint from "@/hooks/useBreakpoint";

interface IProps {
  children: React.ReactNode;
}

const GlobalProvider: React.FC<IProps> = ({ children }) => {
  const [isNavActive, setIsNavActive] = React.useState<boolean>(false);
  const breakpoint = useBreakpoint();

  const [storeState, dispatch] = React.useReducer(reducer, initialState);

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const addItem = (item: IItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
    dispatch({ type: "GET_TOTALS" });
    toast.success(`${item.title} Added to Cart!`);
  };

  const removeItem = (item: IItem) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
    dispatch({ type: "GET_TOTALS" });
    toast.success(`${item.title} Remove From Cart!`);
  };

  const deleteItem = (item: IItem) => {
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

  React.useEffect(() => {
    const onWinScroll = () => {
      const scrollPY = window.pageYOffset > 30 ? true : false;
      setIsNavActive(scrollPY);
    };

    window.addEventListener("scroll", onWinScroll);
    return () => window.removeEventListener("scroll", onWinScroll);
  }, []);

  const value = {
    breakpoint,
    isNavActive,
    toggleCart,
    addItem,
    removeItem,
    deleteItem,
    clearCartItems,
    storeState,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
