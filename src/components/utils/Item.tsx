import useGlobalContext from "@/hooks/useGlobalContext";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import React from "react";

interface IProps {
  id: string;
  title: string;
  text: string;
  rating: string;
  btn: string;
  img: string;
  price: string;
  color: string;
  shadow: string;
  ifExists: boolean;
}

const Item: React.FC<IProps> = (props) => {
  const context = useGlobalContext();

  const item = {
    id: props.id,
    title: props.title,
    text: props.text,
    img: props.img,
    color: props.color,
    shadow: props.shadow,
    price: props.price,
  };

  return (
    <>
      <div
        className={`relative cursor-default bg-gradient-to-b ${props.color} ${
          props.shadow
        } ${
          props.ifExists ? "justify-items-start" : "justify-items-center"
        } grid w-full items-center rounded-xl px-5 py-4 transition-all duration-700 ease-in-out hover:scale-105`}
      >
        <div
          className={`grid items-center ${
            props.ifExists ? "justify-items-start" : "justify-items-center"
          }`}
        >
          <h1 className="text-xl font-medium text-slate-200 drop-shadow filter lg:text-lg md:text-base">
            {props.title}
          </h1>
          <p className="text-base font-normal text-slate-200 drop-shadow filter md:text-sm">
            {props.text}
          </p>
          <div className="my-2 flex w-28 items-center justify-between">
            <div className="blur_effect_theme flex items-center rounded bg-white/80 px-1">
              <h1 className="text-sm font-medium text-black">{props.price}</h1>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="icon_style h-5 w-5 md:h-4 md:w-4" />
              <h1 className="font-normal text-slate-100 md:text-sm">
                {props.rating}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              title="Add to Bag"
              className="blur_effect_theme button_theme bg-white/90 p-0.5 shadow shadow-sky-200"
              onClick={() => context?.addItem(item)}
            >
              <ShoppingBagIcon className="icon_style text-slate-900" />
            </button>
            <button
              type="button"
              title={props.btn}
              onClick={() => {
                context?.addItem(item);
                context?.toggleCart();
              }}
              className="blur_effect_theme button_theme bg-white/90 px-2 py-1 text-sm text-black shadow shadow-sky-200"
            >
              {props.btn}
            </button>
          </div>
        </div>
        <div
          className={`flex items-center ${
            props.ifExists ? "absolute right-1 top-5" : "justify-center"
          }`}
        >
          <img
            src={props.img}
            alt={`item_img_${props.id}`}
            className={`transitions_theme hover:-rotate-12 ${
              props.ifExists
                ? "h-auto w-64 -rotate-[35deg] lg:w-56 md:w-48"
                : "h-36 w-64"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Item;
