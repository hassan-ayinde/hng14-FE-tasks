import { useContext, useMemo, useState } from "react";
import { InvoiceContext } from "@/context/invoice-filter/InvoiceContext";

import MainHeader from "@/components/layouts/MainHeader";
import AppLayout from "@/components/layouts/AppLayout";
import InvoiceCard from "@/components/InvoiceCard";
import AppBar from "@/components/layouts/AppBar";
import InvoicePagination from "@/components/InvoicePagination";

const ITEMS_PER_PAGE = 7;

const AllInvoicesCards = () => {
  const invoiceContext = useContext(InvoiceContext);

  const [currentPage, setCurrentPage] = useState(1);

  const filteredInvoices = useMemo(
    () => invoiceContext?.filteredInvoices ?? [],
    [invoiceContext?.filteredInvoices],
  );

  if (!invoiceContext) return null;

  const totalPages = Math.max(
    1,
    Math.ceil(filteredInvoices.length / ITEMS_PER_PAGE),
  );

  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);

  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const paginatedInvoices = filteredInvoices.slice(startIndex, endIndex);

  return (
    <AppLayout>
      <section className="relative">
        <section className="flex">
          <div className="hidden lg:block">
            <AppBar />
          </div>

          <div className="w-full">
            <MainHeader />

            <section className="pb-18 lg:pb-0">
              {paginatedInvoices.map((invoice) => (
                <InvoiceCard
                  key={invoice.id}
                  name={invoice.billTo.name}
                  status={invoice.status}
                  paymentdueDate={invoice.paymentDue}
                  invoiceId={invoice.invoiceId}
                  grandTotal={invoice.grandTotal}
                />
              ))}
            </section>
          </div>
        </section>

        <section className="bg-white lg:bg-transparent fixed bottom-0 left-0 right-0  py-4">
          <InvoicePagination
            currentPage={safeCurrentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </section>
      </section>
    </AppLayout>
  );
};

export default AllInvoicesCards;
