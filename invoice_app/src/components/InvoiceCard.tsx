import React from "react";
import { Card } from "@/components/ui/card";
import { RiArrowDropRightLine } from "react-icons/ri";
import StatusBadge from "@/components/StatusBadge";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

const InvoiceCard = ({
  name,
  status,
  paymentdueDate,
  invoiceId,
  grandTotal
}: {
  name: string;
  status: string;
  paymentdueDate: string;
  invoiceId: string;
  grandTotal: number;
}) => {
  const navigate = useNavigate();
  const windowWidth = window.innerWidth;
  const handleInvoiceDetails = () => {
    navigate(`/invoice/${invoiceId}`);
  };

  return (
    <section className="px-7 my-3" onClick={windowWidth < 1024 ? handleInvoiceDetails : undefined}>
      <Card className=" py-3 rounded-md px-4">
        <div className="flex gap-15 lg:gap-24">
          {/* Left Section */}
          <div className="justify-between space-y-2 flex flex-col md:flex-row md:items-center w-full">
            <div className="flex items-center gap-1 font-bold">
              <span className="text-gray-400">#</span>
              <span>{invoiceId}</span>
            </div>

            <p className="text-sm text-gray-400">Due {paymentdueDate}</p>

            <p className="text-xl font-bold">£{grandTotal.toFixed(2)}</p>
          </div>

          {/* Right Section */}
          <div className="text-right flex flex-col md:flex-row w-full md:items-center  justify-between">
            <div>
              <h3 className="capitalize font-bold text-xs">{name}</h3>
            </div>
            <StatusBadge status={status} />
            <div className="hidden md:block">
              <Link to={`/invoice/${invoiceId}`} className="flex items-center gap-1 text-gray-400">
              <RiArrowDropRightLine
                className="cursor-pointer text-gray-400 h-6 w-6"
              />
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default InvoiceCard;
