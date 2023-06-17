import { IHighlight } from "@/types";
import React from "react";

const FlexContent: React.FC<{ data: IHighlight; ifExists: boolean }> = ({
  data,
  ifExists,
}) => {
  return (
    <>
      <div
        className={`${
          ifExists ? "flex-row-reverse" : "flex-row"
        } nike_container flex items-center justify-between lg:flex-col lg:justify-center`}
      >
        <div className="grid w-full max-w-lg cursor-default items-center lg:max-w-none lg:justify-items-center md:text-center">
          <h1 className="text_gradient text-4xl font-bold sm:text-3xl">
            {data.heading}
          </h1>
          <h1 className="text-5xl font-bold text-slate-900 drop-shadow-lg filter lg:text-4xl md:text-3xl sm:text-2xl">
            {data.title}
          </h1>
          <p className="my-4 text-slate-900 xl:text-sm">{data.text}</p>
          <a
            href={data.url}
            target="_blank"
            role="button"
            className="flex items-center"
          >
            <button
              type="button"
              title={data.btn}
              className="button_theme bg-slate-900 text-slate-100 shadow-slate-900"
            >
              {data.btn}
            </button>
          </a>
        </div>
        <div className="relative flex w-full max-w-xl items-center justify-center lg:max-w-none">
          <img
            src={data.img}
            alt={`img_${data.heading}`}
            className={`${
              ifExists
                ? "h-60 rotate-6 hover:-rotate-12 lg:h-56 md:h-52 sm:h-44 xsm:h-36"
                : "h-72 rotate-[19deg] hover:rotate-12 lg:h-64 md:h-60 sm:h-48 xsm:h-40"
            } transitions_theme w-auto object-fill`}
          />
        </div>
      </div>
    </>
  );
};

export default FlexContent;
