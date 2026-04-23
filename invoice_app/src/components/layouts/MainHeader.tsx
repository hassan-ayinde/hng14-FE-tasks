import { useState } from "react";
import LOGO from "@/assets/images/logo.svg";
import { HiMiniMoon } from "react-icons/hi2";
import PROFILEIMAGE from "@/assets/images/profile_img.png";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { GoDotFill } from "react-icons/go";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { GoPlus } from "react-icons/go";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  const handleThemeChange = () => {
    setIsDark(() => !isDark);
  };
  return (
    <header className="">
      <section className="nav flex items-center justify-between bg-neutral-600">
        <div className="w-full flex items-center justify-between border-r-2 border-solid border-neutral-550 pr-4">
          <img src={LOGO} alt="" className="w-15" />
          <Button
            onClick={handleThemeChange}
            variant="outline"
            // asChild
            size="icon"
            className="h-auto w-auto cursor-pointer p-0 bg-transparent hover:bg-transparent border-0 hover:text-text-neutral-500"
          >
            {isDark ? (
              <GoDotFill
                className="h-9! w-9! text-neutral-500 cursor-pointer"
              />
            ) : (
              <HiMiniMoon
                className="h-7! w-7! text-neutral-500 cursor-pointer"
              />
            )}
          </Button>
        </div>
        <div className="mx-9">
          <img src={PROFILEIMAGE} alt="" className="w-12 object-cover" />
        </div>
      </section>
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
              <DropdownMenuTrigger
                className="flex justify-center items-center"
              >
                <Button className="bg-white text-black hover:bg-gray-100 pointer-events-auto cursor-pointer">
                  <span>Filter</span>
                  {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent sideOffset={10}>
                <DropdownMenuItem>
                  <div className="flex gap-2">
                    <Checkbox id="draft" className="cursor-pointer" />
                    <Label htmlFor="draft" className="cursor-pointer">
                      draft
                    </Label>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex gap-2">
                    <Checkbox id="pending" className="cursor-pointer" />
                    <Label htmlFor="pending" className="cursor-pointer">
                      pending
                    </Label>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex gap-2">
                    <Checkbox id="paid" className="cursor-pointer" />
                    <Label htmlFor="paid" className="cursor-pointer">
                      paid
                    </Label>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div>
          <Button className="cursor-pointer rounded-full bg-primary-500 hover:bg-primary-400 text-white">
            <span className="inline-block bg-white text-black rounded-full">
              <GoPlus />
            </span>
            <span>new</span>
          </Button>
        </div>
      </section>
    </header>
  );
};

export default MainHeader;
