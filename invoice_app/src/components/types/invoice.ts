export type FormData = {
  from: {
    streetAddress: string;
    city: string;
    postalCode: string;
    country: string;
  };
  to: {
    streetAddress: string;
    city: string;
    postalCode: string;
    country: string;
  };
  clientName: string;
  clientEmail: string;
  invoiceDate: Date | null;
  paymentTerms: string;
  items: InvoiceItem[];
};
export type InvoiceItem = {
  itemName: string;
  quantity: number;
  price: number;
  total: number;
};