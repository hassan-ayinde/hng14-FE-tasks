import { createContext } from "react";

export const AppBarContext = createContext({
  isDark: false,
  handleThemeChange: () => {},
});
