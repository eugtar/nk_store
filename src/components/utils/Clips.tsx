import React from "react";
import { PlayIcon } from "@heroicons/react/20/solid";

const Clips: React.FC<{ imgsrc: string; clip: string }> = ({
  imgsrc,
  clip,
}) => {
  const [showVideo, setShowVideo] = React.useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setShowVideo(!showVideo)}
        onMouseEnter={() => setShowVideo(true)}
        onMouseLeave={() => setShowVideo(false)}
        className="group relative h-28 w-32 cursor-pointer overflow-hidden rounded-xl transition-all duration-300 lg:h-24 lg:w-28 md:h-20 md:w-24 sm:h-14 sm:w-16"
      >
        <img
          src={imgsrc}
          alt="clip_img"
          className="absolute inset-0 left-0 right-0 top-0 z-10 flex h-full w-full rounded-xl object-cover opacity-100 transition-opacity duration-500"
        />
        <div className="blur-effect-theme absolute left-11 right-0 top-11 z-20 flex h-8 w-8 items-center justify-center rounded-full opacity-100 lg:left-9 lg:top-8 md:h-5 md:w-5 sm:left-5 sm:top-4">
          <PlayIcon className="icon-style text-white/75 md:h-3 md:w-3" />
        </div>
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className={`absolute left-0 right-0 top-0 flex h-full w-full rounded-xl object-cover group-hover:z-30 ${
            showVideo ? "group-hover:opacity-100" : "opacity-0"
          }`}
        >
          <source type="video/mp4" src={clip} />
        </video>
      </div>
    </>
  );
};

export default Clips;
