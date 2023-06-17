import React from "react";

const SocialLink: React.FC<{ icon: string; link: string; name: string }> = ({
  icon,
  link,
  name,
}) => {
  return (
    <>
      <a href={link} title={name} target="_blank">
        <img
          src={icon}
          alt="social_icon"
          className="flex h-8 w-8 cursor-pointer items-center transition-all duration-200 hover:scale-110 md:h-6 md:w-6 sm:h-5 sm:w-5"
        />
      </a>
    </>
  );
};

export default SocialLink;
