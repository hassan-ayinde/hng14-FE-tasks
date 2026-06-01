export type InvoiceItem = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export type Address = {
  streetAddress: string;
  city: string;
  postalCode: string;
  country: string;
};

export type PaymentTerms =
  | "Net 1 Day"
  | "Net 7 Days"
  | "Net 14 Days"
  | "Net 30 Days";

export type InvoiceData = {
  id: string;
  invoiceId: string;
  category: string;
  status: "Draft" | "Pending" | "Paid";
  sentFrom: Address;
  billTo: Address & {
    name: string;
    email: string;
  };
  clientName: string;
  clientEmail: string;
  invoiceDate: Date | null;
  paymentDue: string;
  grandTotal: number;
  paymentTerms: PaymentTerms;
  items: (InvoiceItem & {
    currency: string;
  })[];
  currency: string;
};
