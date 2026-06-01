import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import useInvoice from "../hooks/api-call/useInvoice";
import { useParams } from "react-router-dom";

const InvoiceSummary = () => {
  const { invoices } = useInvoice();
  const { invoiceId } = useParams();
  return (
    <div className="rounded-md border overflow-auto max-h-[150px]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {invoices
            .find((invoice) => invoice.invoiceId === invoiceId)
            ?.items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>£{item.price.toFixed(2)}</TableCell>
                <TableCell>£{(item.quantity * item.price).toFixed(2)}</TableCell>
              </TableRow>
            ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} className="capitalize font-bold">amount due</TableCell>

            <TableCell className="font-bold">
              {invoices
                .find((invoice) => invoice.invoiceId === invoiceId)
                ?.items.reduce((total, item) => {
                  const invoiceTotal = (item.quantity || 0) * (item.price || 0);

                  return total + invoiceTotal;
                }, 0).toFixed(2)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default InvoiceSummary;
