import React, { createContext } from "react";
import type { InvoiceData } from "@/types/invoice";
type InvoiceContextType = {
  invoices: InvoiceData[];
  filteredInvoices: InvoiceData[];
  selectedStatus: string[];
  setSelectedStatus: React.Dispatch<React.SetStateAction<string[]>>;
};

export const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined);