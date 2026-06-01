import { useState, useEffect } from "react";
import type { InvoiceData } from "@/types/invoice";
import axios from "axios";
const useInvoice = () => {
  const [invoices, setInvoices] = useState<InvoiceData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get("http://localhost:3000/invoices");
        setInvoices(response.data);
      } catch (error) {
        setError("Failed to fetch invoices.Please try again later.");
        console.error("Error fetching invoices:", error);
      }
    };

    fetchInvoices();
  }, []);

  return { invoices, error };
};

export default useInvoice;
