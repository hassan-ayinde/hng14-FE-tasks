import AppBarProvider from "./app-bar/AppBarProvider";
import ThemeProvider from "./theme/ThemeProvider";
import {InvoiceProvider} from "./invoice-filter/InvoiceProvider";

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <AppBarProvider>
        <InvoiceProvider>{children}</InvoiceProvider>
      </AppBarProvider>
    </ThemeProvider>
  );
};
export default MainProvider;
