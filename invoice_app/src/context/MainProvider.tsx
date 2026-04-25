import AppBarProvider from "./app-bar/AppBarProvider";
import ThemeProvider from "./theme/ThemeProvider";

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <AppBarProvider>{children}</AppBarProvider>
    </ThemeProvider>
  );
}
export default MainProvider;