import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  // setLightTheme has no functionality defined in context so here we have used the same name as the function name in context, this will define the functionality of the function in context from here.

  const setLightTheme = () => {
    setThemeMode("light");
  };

  const setDarkTheme = () => {
    setThemeMode("dark");
  };

  // changing theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider
      value={{
        themeMode,
        setLightTheme,
        setDarkTheme,
      }}
    >
      <div className="flex min-h-screen flex-wrap items-center text-white dark:bg-black">
        <div className="w-full">
          <div className="mx-auto mb-4 flex w-full max-w-sm justify-end">
            <ThemeBtn />
          </div>
          <div className="mx-auto w-full max-w-sm">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
