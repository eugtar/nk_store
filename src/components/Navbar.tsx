import { logo } from "@/assets";
import React from "react";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import useGlobalContext from "@/hooks/useGlobalContext";

const Navbar: React.FC = () => {
  const context = useGlobalContext();

  return (
    <>
      <header
        className={
          context?.isNavActive
            ? "blur_effect_theme fixed left-0 right-0 top-0 z-[110] flex h-[9vh] items-center justify-center opacity-100"
            : "absolute left-0 right-0 top-7 z-[110] opacity-100"
        }
      >
        <nav className="nike_container flex items-center justify-between">
          <div className="flex items-center">
            <a href="#">
              <img
                src={logo}
                alt="logo_img"
                className={`h-auto w-16 ${
                  context?.isNavActive && "brightness-0 filter"
                }`}
              />
            </a>
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center">
              <MagnifyingGlassIcon
                className={`icon_style ${
                  context?.isNavActive && "text-slate-900 transition-all"
                }`}
              />
            </li>
            <li className="grid items-center">
              <HeartIcon
                className={`icon_style ${
                  context?.isNavActive && "text-slate-900 transition-all"
                }`}
              />
            </li>
            <li className="grid items-center">
              <button
                type="button"
                title="Open Bag"
                className="relative border-none outline-none transition-all duration-300 active:scale-110"
                onClick={context?.toggleCart}
              >
                <ShoppingBagIcon
                  className={`icon_style ${
                    context?.isNavActive && "text-slate-900 transition-all"
                  }`}
                />
                <div
                  className={`absolute right-0 top-4 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full text-[0.65rem] font-medium leading-tight shadow transition-all duration-300 hover:scale-110 ${
                    context?.isNavActive
                      ? "bg-slate-900 text-slate-100 shadow-slate-900"
                      : "bg-slate-100 text-slate-900 shadow-slate-100"
                  }`}
                >
                  {context?.storeState.cartTotalQantity}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
