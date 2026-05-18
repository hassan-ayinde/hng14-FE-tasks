import React from "react";
import { Button } from "@/components/ui/button";
import { GoPlus } from "react-icons/go";

const InvoiceFormBtn = () => {
  return (
    <Button className="cursor-pointer rounded-full bg-primary-500 hover:bg-primary-400 text-white">
      <span className="inline-block bg-white text-primary-500 font-bold rounded-full">
        <GoPlus />
      </span>
      <span className="capitalize font-bold">new <span className="hidden md:inline-block">invoice</span></span>
    </Button>
  );
};

export default InvoiceFormBtn;
