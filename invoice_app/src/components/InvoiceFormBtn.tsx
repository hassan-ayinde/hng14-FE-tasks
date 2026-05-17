import React from "react";
import { Button } from "@/components/ui/button";
import { GoPlus } from "react-icons/go";

const InvoiceFormBtn = () => {
  return (
    <Button className="cursor-pointer rounded-full bg-primary-500 hover:bg-primary text-white">
      <span className="inline-block bg-white text-black rounded-full">
        <GoPlus />
      </span>
      <span>new</span>
    </Button>
  );
};

export default InvoiceFormBtn;
