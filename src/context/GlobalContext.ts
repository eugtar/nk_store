import { IGlobalContext } from "@/types";
import React from "react";

const GlobalContext = React.createContext<IGlobalContext | null>(null);

export default GlobalContext;
