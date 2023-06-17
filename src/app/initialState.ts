import { IStore } from "@/types";

const initialState: IStore = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart") as string)
    : [],
  cartTotalAmount: localStorage.getItem("total")
    ? parseInt(JSON.parse(localStorage.getItem("total") as string).totalAmount)
    : 0,
  cartTotalQantity: localStorage.getItem("total")
    ? parseInt(JSON.parse(localStorage.getItem("total") as string).totalQTY)
    : 0,
};

export default initialState;
