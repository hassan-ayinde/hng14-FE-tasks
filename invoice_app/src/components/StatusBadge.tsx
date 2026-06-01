import { cn } from "@/lib/utils"

const StatusBadge = ({ status }: { status: string }) => {
  return (
    <div
      className={cn(
        "ml-auto lg:ml-0 inline-flex items-center gap-2 px-3 py-1 rounded-md w-fit",
        {
          "bg-green-100": status === "Paid",
          "bg-amber-100": status === "Pending",
          "bg-neutral-50": status === "Draft",
        }
      )}
    >
      <div
        className={cn("h-2 w-2 rounded-full", {
          "bg-green-500": status === "Paid",
          "bg-amber-500": status === "Pending",
          "bg-black": status === "Draft",
        })}
      />

      <span
        className={cn("font-semibold", {
          "text-green-600": status === "Paid",
          "text-amber-500": status === "Pending",
          "text-black": status === "Draft",
        })}
      >
        {status}
      </span>
    </div>
  );
};
export default StatusBadge;