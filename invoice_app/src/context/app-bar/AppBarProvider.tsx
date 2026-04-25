import { useContext } from "react";
import { AppBarContext } from "./AppBarContext";
import { ThemeContext } from "../theme/ThemeContext";

const AppBarProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const handleThemeChange = toggleTheme;

  return (
    <AppBarContext.Provider value={{ isDark, handleThemeChange }}>
      {children}
    </AppBarContext.Provider>
  );
};

export default AppBarProvider;
