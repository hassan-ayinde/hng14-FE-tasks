import React from "react";
import { RiArrowDropLeftLine } from "react-icons/ri";
import AppBar from "@/components/layouts/AppBar";
import AppLayout from "@/components/layouts/AppLayout";
import { useParams } from "react-router-dom";
import StatusBadge from "@/components/StatusBadge";
import useInvoices from "@/hooks/api-call/useInvoice";
import { formatDate } from "@/lib/formatDate";
import AddressBlock from "@/components/AddressBlock";
import InvoiceSummary from "@/components/InvoiceSummary";
import InvoiceActionsBtns from "@/components/InvoiceActionsBtns";
import {useNavigate} from "react-router-dom";

const InvoiceDetails = () => {
  const { invoiceId } = useParams();
  const { invoices } = useInvoices();
  const navigate = useNavigate();
  console.log(invoices);
  const invoice = invoices.find((inv) => inv.invoiceId === invoiceId);
    return (
    <AppLayout>
      <section className="relative">
        <section className="lg:flex">
          <div className="lg:h-screen">
            <AppBar />
          </div>
          <section className="mx-auto lg:w-lg w-77.5 pb-28 lg:pb-0">
            <div
              className="flex items-center gap-2 mt-5 cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <RiArrowDropLeftLine className="cursor-pointer text-primary-500 h-6 w-6" />
              <span className="text-primary-500 font-bold">Go back</span>
            </div>
            <section className="h-fit border-0 mt-5">
              <div className="flex items-center justify-between gap-4 py-4 px-3 bg-white rounded-md shadow-lg shadow-neutral-300 ">
                <div className="flex items-center justify-between w-full lg:w-fit lg:gap-4">
                  <div>
                    <h2>status</h2>
                  </div>
                  <div>
                    <StatusBadge
                      status={
                        invoices.find(
                          (invoice) => invoice.invoiceId === invoiceId,
                        )?.status || "unknown"
                      }
                    />
                  </div>
                </div>
                <div className="hidden lg:flex">
                  <InvoiceActionsBtns />
                </div>
              </div>
              <div className="rounded-md shadow-lg shadow-neutral-300 bg-white py-4 px-3 mt-5">
                <div className="flex flex-col lg:flex-row justify-between">
                  <div>
                    <h5 className="font-bold text-md">
                      <span className="text-neutral-400">#</span> {invoiceId}
                    </h5>
                    <p className="text-neutral-400 mt-2">
                      {
                        invoice?.category
                      }
                    </p>
                  </div>
                  <AddressBlock
                    streetName={invoice?.sentFrom.streetAddress || ""}
                    streetCity={invoice?.sentFrom.city || ""}
                    streetCountry={invoice?.sentFrom.country || ""}
                    streetPostalCode={invoice?.sentFrom.postalCode || ""}
                  />
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 mt-4">
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-neutral-400">Invoice Date</p>
                      <p>
                        {formatDate(
                          invoices.find(
                            (invoice) => invoice.invoiceId === invoiceId,
                          )?.invoiceDate || "",
                        )}
                      </p>
                    </div>
                    <div>
                      <p className="text-neutral-400">Payment Date</p>
                      <p>
                        {formatDate(
                          invoices.find(
                            (invoice) => invoice.invoiceId === invoiceId,
                          )?.paymentDue || "",
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <p className="capitalize">bill to</p>
                    <p>
                      {
                        invoice?.billTo.name
                      }
                    </p>
                    <AddressBlock
                      streetName={invoice?.billTo.streetAddress || ""}
                      streetCity={invoice?.billTo.city || ""}
                      streetCountry={invoice?.billTo.country || ""}
                      streetPostalCode={invoice?.billTo.postalCode || ""}
                    />
                  </div>
                  <div>
                    <p className="capitalize">sent to</p>
                    <p className="text-sm mr-3">
                      {
                        invoices.find(
                          (invoice) => invoice.invoiceId === invoiceId,
                        )?.billTo.email
                      }
                    </p>
                  </div>
                </div>
                <InvoiceSummary />
              </div>
            </section>
          </section>
        </section>
        <section className="fixed bottom-0 left-0 right-0 bg-white shadow-lg shadow-neutral-300">
          <div className="lg:hidden mx-auto w-77.5 flex justify-between">
            <InvoiceActionsBtns />
          </div>
        </section>
      </section>
    </AppLayout>
  );
};

export default InvoiceDetails;
