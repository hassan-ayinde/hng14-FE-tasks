import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { MdDelete } from "react-icons/md";
// import type { InvoiceData } from "../types/invoice";
import type { InvoiceFormData } from "@/schema/invoiceSchema";
import type {
  UseFormRegister,
  Control,
  UseFieldArrayRemove,
} from "react-hook-form";
import { useWatch } from "react-hook-form";

type InvoiceItemRowProps = {
  index: number;
  register: UseFormRegister<InvoiceFormData>;
  control: Control<InvoiceFormData>;
  remove: UseFieldArrayRemove;
};

const InvoiceItemRow = ({
  register,
  control,
  remove,
  index,
}: InvoiceItemRowProps) => {
  const quantity = useWatch({
    control,
    name: `items.${index}.quantity`,
  });

  const price = useWatch({
    control,
    name: `items.${index}.price`,
  });

  const total = ((quantity || 0) * (price || 0)).toFixed(2);
  return (
    <div className="mt-3">
      <div className="flex flex-col gap-2 mb-5">
        <Label htmlFor="itemName" className="capitalize font-semibold">
          item name
        </Label>
        <Input id="itemName" {...register(`items.${index}.name`)} />
      </div>
      <div className="grid grid-cols-4 gap-3 md:gap-5 items-center">
        <div className="flex flex-col gap-3">
          <Label htmlFor="quantity">quantity</Label>
          <Input
            id="quantity"
            {...register(`items.${index}.quantity`, { valueAsNumber: true })}
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="price">price</Label>
          <Input
            id="price"
            {...register(`items.${index}.price`, { valueAsNumber: true })}
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="total">total</Label>
          <Input
            id="total"
            type="number"
            value={total}
            readOnly
            className="px-0 shadow-none border-none focus:ring-0! focus-visible:ring-0! bg-transparent"
          />
        </div>
        <div className="flex justify-end">
          <MdDelete
            size={20}
            className="cursor-pointer"
            onClick={() => remove(index)}
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceItemRow;
