import React from "react";
import { footerAPI } from "@/data";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg_theme pb-5 pt-7">
        <div className="nike_container text-slate-200">
          <div className="m-auto grid w-full max-w-2xl grid-cols-3 items-start md:max-w-none md:gap-5">
            {footerAPI.titles.map(({ title }, index) => {
              return (
                <div key={index} className="grid cursor-default items-center">
                  <h1 className="text-lg font-semibold uppercase lg:text-base md:text-sm">
                    {title}
                  </h1>
                </div>
              );
            })}
            {footerAPI.links.map((list, index) => {
              return (
                <ul key={index} className="grid items-center gap-1">
                  {list.map(({ link }, index) => {
                    return (
                      <li key={index} className="text-sm sm:text-xs">
                        <a href="#" target="_blank" title={link}>
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
        <div className="mt-5 cursor-default text-center">
          <p className="text-xs font-normal text-slate-200 md:text-center">
            &#169; 2023 NKStore. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
