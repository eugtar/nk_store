import GlobalContext from "@/context/GlobalContext";
import React from "react";

const useGlobalContext = () => {
  return React.useContext(GlobalContext);
};

export default useGlobalContext;
