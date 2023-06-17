import React from "react";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import useGlobalContext from "@/hooks/useGlobalContext";
import { IStoreItem } from "@/types";

const Cart: React.FC = () => {
  const context = useGlobalContext();

  return (
    <>
      <div
        className={`blur_effect_theme fixed bottom-0 left-0 right-0 top-0 z-[120] h-screen w-full ${
          context?.storeState?.cartState
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-8 opacity-0"
        }`}
      >
        <div
          className={`blur_effect_theme absolute right-0 h-screen w-full max-w-xl`}
        >
          <CartCount />
          {context?.storeState.cartItems.length ? (
            <>
              <div className="scroll_hidden mb-3 flex h-[78vh] flex-col items-start justify-start gap-y-7 overflow-y-scroll scroll-smooth py-3 lg:gap-y-5">
                {context?.storeState.cartItems.map(
                  (item: IStoreItem, index: number) => {
                    return <CartItem key={index} {...item} />;
                  }
                )}
              </div>
              <div className="fixed bottom-0 grid w-full items-center bg-white px-5 py-2">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold uppercase">
                    SubTotal
                  </h1>
                  <h1 className="bg_theme_cart rounded px-1 py-0.5 text-sm text-slate-100">
                    ${context?.storeState.cartTotalAmount}
                  </h1>
                </div>
                <div className="grid items-center gap-2">
                  <p className="text-center text-sm font-medium">
                    Taxes and Shipping Will Calculate At Shipping
                  </p>
                  <button
                    type="button"
                    className="button_theme bg_theme_cart text-white"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </>
          ) : (
            <CartEmpty />
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
