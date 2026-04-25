// import AllInvoices from "./pages/allInvoices";
import "./App.css";
import EmptyInvoice from "./pages/EmptyInvoice";
import MainProvider from "./context/MainProvider";


function App() {
  return (
    <MainProvider>
        {/* <AllInvoices/> */}
        <EmptyInvoice />
    </MainProvider>
  );
}

export default App;
