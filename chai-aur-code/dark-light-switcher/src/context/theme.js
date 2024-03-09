// use this method as it is more efficient than using the previous method

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    setDarkTheme: () => { },
    setLightTheme: () => { }
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}