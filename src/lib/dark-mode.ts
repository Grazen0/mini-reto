import { createContext, useContext } from "react";

export const DarkModeProvider = createContext(false);

export const useDarkMode = () => useContext(DarkModeProvider);
