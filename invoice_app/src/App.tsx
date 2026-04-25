// import AllInvoices from "./pages/allInvoices";
import "./App.css";
import EmptyInvoice from "./pages/EmptyInvoice";
import AppBarProvider from "./context/AppBarProvider";

function App() {
  return (
    <AppBarProvider>
      {/* <AllInvoices/> */}
      <EmptyInvoice />
    </AppBarProvider>
  );
}

export default App;
