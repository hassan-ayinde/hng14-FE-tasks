import {useState} from "react";
import useInvoice from "@/hooks/api-call/useInvoice";
import { InvoiceContext } from "./InvoiceContext";


export const InvoiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { invoices } = useInvoice();
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);

  const filteredInvoices = selectedStatus.length
    ? invoices.filter((invoice) => selectedStatus.includes(invoice.status.toLocaleLowerCase()))
    : invoices;
      
  return (
    <InvoiceContext.Provider value={{ invoices, filteredInvoices, selectedStatus, setSelectedStatus }}>
      {children}
    </InvoiceContext.Provider>
  );
};


