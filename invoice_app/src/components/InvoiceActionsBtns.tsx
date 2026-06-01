import { Button } from "@/components/ui/button";
import DeleteConfirmation from "./DeleteConfirmation";

const actions = [
  {
    label: "Edit",
    className:
      "bg-neutral-100 hover:bg-neutral-400 text-gray-300 hover:text-neutral-100",
  },
  {
    label: "Delete",
    className: "bg-red-500 hover:bg-red-400 text-white",
  },
  {
    label: "Mark as Paid",
    className: "bg-primary-500 hover:bg-primary-400 text-white",
  },
];

const InvoiceActionsBtns = () => {
  

  return (
    <div className="my-4 lg:my-0 flex items-center gap-3 w-full justify-between">
      {actions.map((action) => {
        if (action.label === "Delete") {
          return (
          <DeleteConfirmation action={action} />
          );
        }

        return (
          <Button
            key={action.label}
            className={`cursor-pointer rounded-full ${action.className}`}
          >
            <span className="capitalize font-bold">
              {action.label}
            </span>
          </Button>
        );
      })}
    </div>
  );
};

export default InvoiceActionsBtns;