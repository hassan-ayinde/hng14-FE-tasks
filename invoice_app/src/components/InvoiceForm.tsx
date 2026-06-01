import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const InvoiceForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { fields, append, remove } = useFieldArray({
    name: "items",
  });
  return (
    <form id="invoice-form" action="" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="flex flex-col gap-7">
          <h3 className="text-primary-500 capitalize font-bold">bill from</h3>
          <div className="flex flex-col gap-2">
            <Label htmlFor="streetAddress" className="capitalize">
              street address
            </Label>
            <Input id="streetAddress" {...register("sentFrom.streetAddress")} />
            {errors.sentFrom?.streetAddress && (
              <p className="text-red-500 text-sm mt-1">
                {errors.sentFrom.streetAddress.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="flex flex-col gap-2">
              <Label htmlFor="city" className="capitalize">
                City
              </Label>
              <Input id="city" {...register("sentFrom.city")} />
              {errors.sentFrom?.city && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.sentFrom.city.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="postalCode" className="capitalize">
                postal code
              </Label>
              <Input id="postalCode" {...register("sentFrom.postalCode")} />
              {errors.sentFrom?.postalCode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.sentFrom.postalCode.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
              <Label htmlFor="country" className="capitalize">
                country
              </Label>
              <Input
                id="country"
                {...register("sentFrom.country")}
                className="w-full"
              />
              {errors.sentFrom?.country && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.sentFrom.country.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 mt-10">
          <h3 className="capitalize font-bold text-primary-500">bill to</h3>
          <div className="flex flex-col gap-2">
            <Label htmlFor="clientName " className="capitalize font-semibold">
              client's name
            </Label>
            <Input id="clientName" {...register("billTo.name")} />
            {errors.billTo?.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.billTo.name.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="clientEmail" className="capitalize font-semibold">
              client email
            </Label>
            <Input id="clientEmail" {...register("billTo.email")} />
            {errors.billTo?.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.billTo.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="streetAddress" className="capitalize font-semibold">
              street address
            </Label>
            <Input id="streetAddress" {...register("billTo.streetAddress")} />
            {errors.billTo?.streetAddress && (
              <p className="text-red-500 text-sm mt-1">
                {errors.billTo.streetAddress.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="flex flex-col gap-2">
              <Label htmlFor="city" className="capitalize font-semibold">
                City
              </Label>
              <Input id="city" {...register("billTo.city")} />
              {errors.billTo?.city && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.billTo.city.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="postalCode" className="capitalize font-semibold">
                postal code
              </Label>
              <Input id="postalCode" {...register("billTo.postalCode")} />
              {errors.billTo?.postalCode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.billTo.postalCode.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
              <Label htmlFor="country" className="capitalize font-semibold">
                country
              </Label>
              <Input id="country" {...register("billTo.country")} />
              {errors.billTo?.country && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.billTo.country.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="invoiceDate" className="capitalize font-semibold">
                invoice date
              </Label>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Controller
                  name="invoiceDate"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      value={field.value ? dayjs(field.value) : null}
                      onChange={(date) => field.onChange(date?.toDate())}
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
              <Controller
                name="paymentTerms"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full cursor-pointer">
                      <SelectValue placeholder="Payment Terms" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectGroup>
                        {[
                          "Net 1 Day",
                          "Net 7 Days",
                          "Net 14 Days",
                          "Net 30 Days",
                        ].map((term) => (
                          <SelectItem key={term} value={term}>
                            {term}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />

              {errors.paymentTerms && (
                <p className="text-red-500 text-sm">
                  {errors.paymentTerms.message}
                </p>
              )}
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
              name: "",
              quantity: 0,
              price: 0,
              total: 0,
              currency: "",
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
  );
};

export default InvoiceForm;
