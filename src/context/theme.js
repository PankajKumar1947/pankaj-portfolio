import { createContext, useContext } from "react";

export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightThem:()=>{},
})

export const ThemeProvider=ThemeContext.Provider;

//exporting the custom hooks

export default function useTheme(){
    return useContext(ThemeContext);
}