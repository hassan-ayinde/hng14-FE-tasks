import { useState } from "react";
import { AppBarContext } from "./AppBarContext";

const AppBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const handleThemeChange = () => {
    setIsDark(() => !isDark);
  };

  return (
    <AppBarContext.Provider value={{ isDark, handleThemeChange }}>
      {children}
    </AppBarContext.Provider>
  );
};

export default AppBarProvider;
