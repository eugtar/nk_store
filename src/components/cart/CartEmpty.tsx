import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React from "react";
import emptybag from "@/assets/emptybag.png";
import useGlobalContext from "@/hooks/useGlobalContext";

const CartEmpty: React.FC = () => {
  const context = useGlobalContext();

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center gap-7 px-11 text-center">
        <img
          src={emptybag}
          alt="emptybag_img"
          className="h-auto w-40 object-fill transition-all duration-300 hover:scale-110 lg:w-36 sm:w-28"
        />
        <button
          type="button"
          title="Back To NKStore"
          onClick={context?.toggleCart}
          className="button_theme flex items-center justify-center gap-3 bg-gradient-to-b from-amber-500 to-orange-500 px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-orange-500 active:scale-110"
        >
          <ArrowLeftIcon className="h-5 w-5 text-slate-900" />
          <span>Back To NKStore</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
