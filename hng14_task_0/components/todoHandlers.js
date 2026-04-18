import { updateRemainingTime, formatRemainingTime } from "../utils/time.js";
export const handleCheckboxChange = (checkboxElement, taskStatusElement) => {
  checkboxElement.addEventListener("change", () => {
    if (checkboxElement.checked) {
      taskStatusElement.textContent = "done";
      taskStatusElement.setAttribute("aria-label", "completed-status");
    }
  });
};

export const handleEdit = (editButtonElement) => {
  editButtonElement.addEventListener("click", () => {
    console.log("Edit Clicked");
  });
};

export const handleDelete = (deleteButtonElement) => {
  deleteButtonElement.addEventListener("click", () => {
    alert("Delete Clicked");
  });
};

export const  handleTimeUpdate = (dueDate, dueDateElement) => {
  const timeData = updateRemainingTime(dueDate, dueDateElement);
  formatRemainingTime(timeData, dueDateElement);
  setInterval(() => {
    const timeData = updateRemainingTime(dueDate, dueDateElement);
    formatRemainingTime(timeData, dueDateElement);
  }, 60000);
};