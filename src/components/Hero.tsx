import React from "react";
import { heroapi } from "@/data";
import { Clips, SocialLink } from "./utils";

const Hero: React.FC = () => {
  return (
    <>
      <div className="relative flex h-auto w-auto flex-col">
        <div className="bg_theme clip_path absolute left-0 right-0 top-0 z-10 h-[85vh] w-auto opacity-100 lg:h-[75vh] md:h-[65vh] sm:h-[55vh]"></div>
        <div className="nike_container relative z-20 grid items-center justify-items-center opacity-100">
          <div className="mt-28 grid items-center justify-items-center md:mt-24">
            <h1 className="cursor-default text-6xl font-extrabold text-slate-200 drop-shadow-sm filter lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl">
              {heroapi.title}
            </h1>
            <h1 className="cursor-default text-6xl font-extrabold text-slate-200 drop-shadow-sm filter lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl">
              {heroapi.subtitle}
            </h1>
            <button
              type="button"
              title={heroapi.btntext}
              className="button_theme z-10 my-5 rounded-xl bg-slate-200 shadow-slate-200"
            >
              {heroapi.btntext}
            </button>
            <div className="absolute left-[11%] top-[33vh] grid h-auto w-auto items-center gap-5 xl:left-0 lg:top-[27vh] md:gap-3">
              {heroapi.videos.map((item, index) => {
                return <Clips key={index} {...item} />;
              })}
            </div>
            <div className="absolute  right-0 top-[33vh] grid items-center gap-3 lg:top-[27vh]">
              {heroapi.sociallinks.map((item, index) => {
                return <SocialLink key={index} {...item} />;
              })}
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={heroapi.img}
              alt="hero_img"
              className="transitions_theme h-[45vh] w-auto -rotate-[25deg] cursor-pointer object-fill hover:rotate-0 lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
