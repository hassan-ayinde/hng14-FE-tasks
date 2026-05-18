import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  // SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import InvoiceFormBtn from "@/components/InvoiceFormBtn";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InvoiceItemRow from "@/components/InvoiceItemRow";
import type { FormData } from "@/components/types/invoice";

import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const NewInvoiceForm = () => {
  const { register, handleSubmit, control, reset } = useForm<FormData>({
    defaultValues: {
      invoiceDate: null,
      items: [
        {
          itemName: "",
          quantity: 0,
          price: 0,
          total: 0,
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({ control, name: "items" });
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <Sheet modal={false}>
      <SheetTrigger>
        <InvoiceFormBtn />
      </SheetTrigger>
      <SheetContent
        className="md:rounded-tr-2xl md:rounded-br-2xl flex flex-col lg:ml-15 mt-15 lg:mt-0 w-screen! max-w-lg! lg:max-w-sm! [&>button.absolute]:hidden"
        side="left"
      >
        <OverlayScrollbarsComponent
          defer
          options={{
            scrollbars: {
              autoHide: "leave",
              clickScroll: true,
              dragScroll: true,
            },
          }}
        >
          <div className="relative h-full">
            <SheetHeader className="flex flex-col gap-10">
              <SheetTitle>
                <div>
                  <SheetClose className="flex items-center gap-2 justify-start!">
                    <div className="flex items-center gap-2 justify-start!">
                      <Button
                        variant="ghost"
                        className="cursor-pointer text-primary-500 ml-0 p-0 justify-start!"
                      >
                        <MdKeyboardArrowLeft className="h-8! w-8! ml-0 pl-0" />
                      </Button>
                      <p>Go back</p>
                    </div>
                  </SheetClose>
                </div>
                <div className="mt-5">
                  <h2 className="text-2xl font-bold capitalize">new invoice</h2>
                </div>
              </SheetTitle>
              <SheetDescription>
                <form
                  id="invoice-form"
                  action=""
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div>
                    <div className="flex flex-col gap-7">
                      <h3 className="text-primary-500 capitalize font-bold">
                        bill from
                      </h3>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="streetAddress" className="capitalize">
                          street address
                        </Label>
                        <Input
                          id="streetAddress"
                          {...register("from.streetAddress")}
                        />
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="city" className="capitalize">
                            City
                          </Label>
                          <Input id="city" {...register("from.city")} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="postalCode" className="capitalize">
                            postal code
                          </Label>
                          <Input
                            id="postalCode"
                            {...register("from.postalCode")}
                          />
                        </div>
                        <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                          <Label htmlFor="country" className="capitalize">
                            country
                          </Label>
                          <Input
                            id="country"
                            {...register("from.country")}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-7 mt-10">
                      <h3 className="capitalize font-bold text-primary-500">
                        bill to
                      </h3>
                      <div className="flex flex-col gap-2">
                        <Label
                          htmlFor="clientName "
                          className="capitalize font-semibold"
                        >
                          client's name
                        </Label>
                        <Input id="clientName" {...register("clientName")} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label
                          htmlFor="clientEmail"
                          className="capitalize font-semibold"
                        >
                          client email
                        </Label>
                        <Input id="clientEmail" {...register("clientEmail")} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label
                          htmlFor="streetAddress"
                          className="capitalize font-semibold"
                        >
                          street address
                        </Label>
                        <Input
                          id="streetAddress"
                          {...register("to.streetAddress")}
                        />
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div className="flex flex-col gap-2">
                          <Label
                            htmlFor="city"
                            className="capitalize font-semibold"
                          >
                            City
                          </Label>
                          <Input id="city" {...register("to.city")} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label
                            htmlFor="postalCode"
                            className="capitalize font-semibold"
                          >
                            postal code
                          </Label>
                          <Input
                            id="postalCode"
                            {...register("to.postalCode")}
                          />
                        </div>
                        <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                          <Label
                            htmlFor="country"
                            className="capitalize font-semibold"
                          >
                            country
                          </Label>
                          <Input id="country" {...register("to.country")} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                          <Label
                            htmlFor="invoiceDate"
                            className="capitalize font-semibold"
                          >
                            invoice date
                          </Label>

                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Controller
                              name="invoiceDate"
                              control={control}
                              render={({ field }) => (
                                <DatePicker
                                  value={
                                    field.value ? dayjs(field.value) : null
                                  }
                                  onChange={(date) =>
                                    field.onChange(date?.toDate())
                                  }
                                  className="text"
                                />
                              )}
                            />
                          </LocalizationProvider>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label
                            htmlFor="paymentTerms"
                            className="capitalize font-semibold"
                          >
                            payment terms
                          </Label>
                          <Select>
                            <SelectTrigger className="w-full cursor-pointer">
                              <SelectValue
                                placeholder="Payment Terms"
                                id="paymentTerms"
                              />
                            </SelectTrigger>
                            <SelectContent
                              alignItemWithTrigger={false}
                              className="mt-5"
                            >
                              <SelectGroup>
                                {[
                                  "Net 1 Day",
                                  "Net 7 Days",
                                  "Net 14 Days",
                                  "Net 30 Days",
                                ].map((term) => (
                                  <SelectItem
                                    key={term}
                                    value={term}
                                    className="py-0 cursor-pointer border-b hover:bg-transparent! border-gray-300 rounded-none last:border-0"
                                  >
                                    <div className="py-2 text-md font-semibold hover:text-primary-500!">
                                      {term}
                                    </div>
                                    {/* {term} */}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 mb-40 md:mb-17">
                    <h3 className="capitalize font-semibold mb-3">item list</h3>
                    {fields.map((field, index) => (
                      <InvoiceItemRow
                        key={field.id}
                        index={index}
                        register={register}
                        control={control}
                        remove={remove}
                      />
                    ))}
                    <Button
                      variant="outline"
                      className="w-full mt-7 cursor-pointer"
                      type="button"
                      onClick={() => {
                        append({
                          itemName: "",
                          quantity: 0,
                          price: 0,
                          total: 0,
                        });
                      }}
                    >
                      <FaPlus />
                      <span>Add new Item</span>
                    </Button>
                  </div>
                  <div className="dark:bg-neutral-800 max-w-lg! lg:max-w-sm! rounded-br-2xl fixed mb-0 lg:mb-0 bottom-0 left-0 right-0 flex justify-between shadow-top-2xl bg-white shadow-black p-4 lg:ml-15">
                    <SheetClose>
                      <Button
                        variant="outline"
                        type="button"
                        onClick={() => reset()}
                        className="cursor-pointer"
                      >
                        Discard
                      </Button>
                    </SheetClose>
                    <Button>Save Draft</Button>
                    <Button
                      type="submit"
                      form="invoice-form"
                      className="bg-primary-500 hover:bg-primary text-white cursor-pointer"
                    >
                      save & send
                    </Button>
                  </div>
                </form>
              </SheetDescription>
            </SheetHeader>
          </div>
        </OverlayScrollbarsComponent>
        {/* <SheetFooter>
          <div className="flex justify-between">
            <SheetClose>
              <Button variant="outline">Discard</Button>
            </SheetClose>
            <Button>Save Draft</Button>
            <Button type="submit" form="invoice-form">
              save & send
            </Button>
          </div>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
};

export default NewInvoiceForm;
