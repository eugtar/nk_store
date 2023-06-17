import React from "react";
import { story } from "@/data";
import { Title } from "./utils";
import { register } from "swiper/element";
import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import useGlobalContext from "@/hooks/useGlobalContext";

register();

const Stories: React.FC = () => {
  const context = useGlobalContext();

  return (
    <div className="nike_container mb-11">
      <Title title={story.title} />
      <div className="mt-7">
        <swiper-container
          navigation="true"
          loop="true"
          slides-per-view={`${context?.breakpoint}`}
          allow-touch-move="true"
        >
          {story?.news.map((item, index) => {
            return (
              <swiper-slide key={index}>
                <div className="relative mb-0.5 grid items-center gap-4 rounded-lg pb-2 shadow shadow-slate-200 ring-1 ring-slate-200">
                  <div className="flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={`story_img_${index}`}
                      className="h-auto w-full rounded-t-lg object-cover shadow-md shadow-slate-200"
                    />
                  </div>
                  <div className="flex w-full cursor-default items-center justify-between px-4">
                    <div className="flex items-center gap-0.5">
                      <HeartIcon className="icon_style h-5 w-5 text-red-500" />
                      <span className="text-xs font-bold">{item.like}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <ClockIcon className="icon_style h-4 w-4 text-black" />
                      <span className="text-xs font-bold">{item.time}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <HashtagIcon className="icon_style text-blue-600" />
                      <span className="text-xs font-bold text-blue-600">
                        {item.by}
                      </span>
                    </div>
                  </div>
                  <div className="grid h-[150px] cursor-default items-center justify-items-start px-4">
                    <h1 className="text-base font-semibold lg:text-sm">
                      {item.title}
                    </h1>
                    <p className="text-justify text-sm lg:text-xs">
                      {item.text.slice(0, 200) + "..."}
                    </p>
                  </div>
                  <div className="flex w-full items-center justify-center px-4">
                    <a
                      href={item.url}
                      title={item.btn}
                      target="_blank"
                      role="button"
                      className="button_theme w-full bg-gradient-to-b from-slate-800 to-black py-1.5 text-center text-slate-100 shadow-md shadow-black"
                    >
                      {item.btn}
                    </a>
                  </div>
                </div>
              </swiper-slide>
            );
          })}
        </swiper-container>
      </div>
    </div>
  );
};

export default Stories;
