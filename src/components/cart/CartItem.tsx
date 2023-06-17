import { IStoreItem } from "@/types";
import React from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import useGlobalContext from "@/hooks/useGlobalContext";

const CartItem: React.FC<IStoreItem> = (props) => {
  const context = useGlobalContext();

  return (
    <>
      <div className="flex w-full cursor-default items-center justify-between px-5">
        <div className="flex items-center gap-5">
          <div
            className={`bg-gradient-to-b ${props.color} ${props.shadow} relative grid items-center rounded p-3 transition-all duration-75 ease-in-out hover:scale-105`}
          >
            <img
              src={props.img}
              alt={`cart_item_img_${props.id}`}
              className="h-auto w-36 object-fill lg:w-28"
            />
            <div className="blur_theme_effect absolute right-1 top-1 rounded bg-white/80 px-1 text-xs text-black">
              ${props.price}
            </div>
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="text-lg font-medium text-slate-900 lg:text-sm">
                {props.title}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{props.text}</p>
            </div>
            <div className="flex w-full items-center justify-around">
              <button
                type="button"
                onClick={() => context?.removeItem(props)}
                className="bg_theme_cart flex h-6 w-6 items-center justify-center rounded active:scale-90 lg:h-5 lg:w-5"
              >
                <MinusIcon className="h-5 w-5 stroke-[2] text-white lg:h-4 lg:w-4" />
              </button>
              <div className="bg_theme_cart flex h-6 w-7 items-center justify-center rounded font-medium text-white lg:h-5 lg:w-6 lg:text-xs">
                {props.cartQuantity}
              </div>
              <button
                type="button"
                onClick={() => context?.addItem(props)}
                className="bg_theme_cart flex h-6 w-6 items-center justify-center rounded active:scale-90 lg:h-5 lg:w-5"
              >
                <PlusIcon className="h-5 w-5 stroke-[2] text-white lg:h-4 lg:w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center">
            <h1 className="text-lg font-medium text-slate-900 lg:text-base">
              ${parseInt(props.price) * props.cartQuantity}
            </h1>
          </div>
          <div className="grid items-center justify-center">
            <button
              type="button"
              onClick={() => context?.deleteItem(props)}
              className="bg_theme_cart grid items-center justify-items-center rounded p-1 lg:p-0.5"
            >
              <TrashIcon className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
