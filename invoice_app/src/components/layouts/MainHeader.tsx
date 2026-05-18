import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import AppBar from "./AppBar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import NewInvoiceForm from "@/pages/NewInvoiceForm";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const statuses = ["draft", "pending", "paid"];

  const handleStatusChange = (status: string) => {
    setSelectedStatus((prevSelected) => {
      if (prevSelected.includes(status)) {
        return prevSelected.filter((s) => s !== status);
      } else {
        return [...prevSelected, status];
      }
    });
  };

  return (
    <header className="">
      <div className="lg:hidden">
        <AppBar />
      </div>
      <div>
        <section className="mt-5 flex items-center justify-between px-7 gap-5">
          <div className="flex items-center justify-between w-full">
            <div>
              <h2 className="font-bold">Invoices</h2>
              <p className="text-sm text-gray-500">
                <span>No</span> invoices
              </p>
            </div>
            <div>
              <DropdownMenu
                open={isOpen}
                onOpenChange={(open) => setIsOpen(open)}
              >
                <DropdownMenuTrigger className="flex justify-center items-center">
                  <Button
                    variant="outline"
                    className="border-0 shadow-none text-black hover:bg-transparent pointer-events-auto cursor-pointer"
                  >
                    <span className="capitalize">
                      filter{" "}
                      <span className="hidden md:inline-block">by status</span>
                    </span>
                    {isOpen ? (
                      <MdKeyboardArrowUp className="text-primary-500" />
                    ) : (
                      <MdKeyboardArrowDown className="text-primary-500" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  sideOffset={10}
                  className="capitalize"
                >
                  {statuses.map((status) => (
                    <DropdownMenuItem
                      key={status}
                      onSelect={() => handleStatusChange(status)}
                      className="flex items-center gap-2 group hover:bg-transparent focus:bg-transparent"
                    >
                      <Checkbox
                        id={status}
                        checked={selectedStatus.includes(status)}
                        onCheckedChange={() => handleStatusChange(status)}
                        className="data-checked:bg-primary-500 data-checked:border-primary-500 data-checked:stroke-white data-checked:hover:bg-primary-100 cursor-pointer group-hover:border-primary-500 group-hover:bg-accent group-hover:text-accent-foreground bg-primary-100"
                      />
                      <Label htmlFor={status} className="cursor-pointer">
                        {status}
                      </Label>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div>
            <NewInvoiceForm />
          </div>
        </section>
      </div>
    </header>
  );
};

export default MainHeader;
