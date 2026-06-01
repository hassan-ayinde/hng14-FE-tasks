import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";

const DeleteConfirmation = ({
  action,
}: {
  action: { label: string; className: string };
}) => {
  const { invoiceId } = useParams();
  const navigate = useNavigate();
  const handleDelete = () => {
    navigate("/");
  };
  return (
    <AlertDialog key={action.label}>
      <AlertDialogTrigger>
        <Button className={`cursor-pointer rounded-full ${action.className}`}>
          <span className="capitalize font-bold">{action.label}</span>
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete invoice?</AlertDialogTitle>

          <AlertDialogDescription>
            Are you sure you want to delete the invoice <strong>#{invoiceId}</strong>? This action cannot be
            undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-400 cursor-pointer"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteConfirmation;
