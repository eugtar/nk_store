import React from "react";
import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import useGlobalContext from "@/hooks/useGlobalContext";

const CartCount: React.FC = () => {
  const context = useGlobalContext();
  return (
    <>
      <div className="sticky left-0 right-0 top-0 flex h-11 w-full items-center justify-between bg-white px-3">
        <div className="flex items-center gap-3">
          <div
            className="grid cursor-pointer items-center"
            onClick={context?.toggleCart}
          >
            <ChevronDoubleLeftIcon
              title="Back"
              className="h-5 w-5 stroke-[2] text-slate-900 hover:text-orange-500"
            />
          </div>
          <div className="grid cursor-default items-center">
            <h1 className="text-base font-medium text-slate-900">
              Your Cart{" "}
              <span className="bg_theme_cart rounded px-1 py-0.5 text-xs font-normal text-slate-100">
                {context?.storeState.cartTotalQantity} Items
              </span>
            </h1>
          </div>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            title="Clear Cart"
            onClick={context?.clearCartItems}
            className="bg_theme_cart rounded p-0.5 active:scale-90"
          >
            <XMarkIcon className="h-5 w-5 stroke-[2] text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
