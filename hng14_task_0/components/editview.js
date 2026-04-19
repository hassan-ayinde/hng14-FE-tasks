import { domElements } from "../utils/domElements.js";
export const editView = () => {
  domElements.titleInput.value = domElements.titleText.textContent;
  domElements.taskDescriptionInput.value =
    domElements.taskDescription.textContent.replace(/\s+/g, " ").trim();
  const date = new Date(domElements.dueDate.textContent);
  const formattedDate = `${date.getFullYear()}-${String(
    date.getMonth() + 1,
  ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

  domElements.dueDateInput.value = formattedDate;
  domElements.taskPrioritySelector.value = domElements.taskPriority.textContent;
  domElements.taskStatusSelector.value = domElements.taskStatusElement.textContent;

};

export const formatToLongDate = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
