import "./App.css";
import MainProvider from "./context/MainProvider";
import AllInvoicesCards from "./pages/AllInvoicesCards";
import EmptyInvoice from "./pages/EmptyInvoice";
import InvoiceDetails from "@/pages/InvoiceDetails";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import useInvoices from "@/hooks/api-call/useInvoice";

function App() {
  const { invoices } = useInvoices();

  return (
    <BrowserRouter>
      <MainProvider>
        <Routes>
          <Route
            path="/"
            element={
              invoices.length > 0 ? <AllInvoicesCards /> : <EmptyInvoice />
            }
          />
          <Route path="/invoice/:invoiceId" element={<InvoiceDetails />} />
        </Routes>
      </MainProvider>
    </BrowserRouter>
  );
}

export default App;
