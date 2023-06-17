import React from "react";

const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <div className="grid cursor-default items-center">
        <h1
          className="text-5xl font-bold text-slate-900 drop-shadow-lg filter lg:text-4xl
         md:text-3xl"
        >
          {title}
        </h1>
      </div>
    </>
  );
};

export default Title;
