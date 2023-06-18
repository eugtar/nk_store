/* eslint-disable @typescript-eslint/no-explicit-any */
import { IInitialState } from "@/types";

const reducer = (state: IInitialState, action: any) => {
  switch (action.type) {
    case "TOGGLE_CART": {
      return { ...state, cartState: !state.cartState };
    }
    case "ADD_ITEM": {
      const temp = { ...action.payload, cartQuantity: 1 };
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === temp.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      }
      if (itemIndex === -1) {
        state.cartItems.push(temp as never);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      return { ...state };
    }
    case "REMOVE_ITEM": {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      return { ...state };
    }
    case "DELETE_ITEM": {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      return { ...state };
    }
    case "CLEAR_ITEMS": {
      state.cartItems = [];
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      return { ...state };
    }
    case "GET_TOTALS": {
      let totalAmount = 0,
        totalQTY = 0;
      state.cartItems.forEach((cartItem) => {
        const { price, cartQuantity } = cartItem;
        const totalPrice = parseInt(price) * cartQuantity;
        totalAmount += totalPrice;
        totalQTY += cartQuantity;
      });
      localStorage.setItem("total", JSON.stringify({ totalAmount, totalQTY }));
      return {
        ...state,
        cartTotalAmount: totalAmount,
        cartTotalQantity: totalQTY,
      };
    }
  }
};

export default reducer;
