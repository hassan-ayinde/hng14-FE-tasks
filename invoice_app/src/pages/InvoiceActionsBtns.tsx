import { Button } from "@/components/ui/button"
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
    <div className="flex items-center gap-3">
      {actions.map((action) => (
        <Button
          key={action.label}
          className={`cursor-pointer rounded-full ${action.className}`}
        >
          <span className="capitalize font-bold">{action.label}</span>
        </Button>
      ))}
    </div>
  );
};
export default InvoiceActionsBtns;