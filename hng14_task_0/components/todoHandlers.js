import { updateRemainingTime, formatRemainingTime } from "../utils/time.js";
import { editView, formatToLongDate } from "./editview.js";
import { domElements } from "../utils/domElements.js";

let isEditing = false;
let timeIntervalId;
let lastFocusedElement = null;

const toggleEditMode = (editForm, cardContainer, isEditing) => {
  if (isEditing) {
    editForm.classList.add("edit-card");
    editForm.classList.remove("view-card");
    cardContainer.classList.add("view-card");
    cardContainer.classList.remove("edit-card");
  } else {
    editForm.classList.remove("edit-card");
    editForm.classList.add("view-card");
    cardContainer.classList.remove("view-card");
    cardContainer.classList.add("edit-card");
  }
};

export const handleCheckboxChange = (checkboxElement, taskStatusElement) => {
  checkboxElement.addEventListener("change", () => {
    if (checkboxElement.checked) {
      taskStatusElement.textContent = "done";
      taskStatusElement.setAttribute("aria-label", "completed-status");
      applyDoneState();
    } else {
      taskStatusElement.textContent = "pending";
      handleTimeUpdate(
        new Date(domElements.dueDate.textContent),
        domElements.dueDateElement,
      );
    }
  });
};

export const handleEdit = (
  editButtonElement,
  cardContainerElement,
  editFormElement,
) => {
  editButtonElement.addEventListener("click", () => {
    lastFocusedElement = editButtonElement;
    isEditing = true;
    toggleEditMode(editFormElement, cardContainerElement, isEditing);
    editView();
    domElements.titleInput.focus();
  });
};

export const handleDelete = (deleteButtonElement) => {
  deleteButtonElement.addEventListener("click", () => {
    alert("Delete Clicked");
  });
};

export const handleTimeUpdate = (dueDate, dueDateElement) => {
  const update = () => {
    const timeData = updateRemainingTime(dueDate);
    formatRemainingTime(timeData, dueDateElement);
  };
  update();
  if (timeIntervalId) clearInterval(timeIntervalId);

  timeIntervalId = setInterval(update, 3000);
};

export const handleCancelEdit = (
  cancelBtn,
  editFormElement,
  cardContainerElement,
) => {
  cancelBtn.addEventListener("click", () => {
    isEditing = false;
    toggleEditMode(editFormElement, cardContainerElement, isEditing);
    if (lastFocusedElement) lastFocusedElement.focus();
  });
};
export const handleSaveEdit = (saveBtn, editForm, cardContainer) => {
  saveBtn.addEventListener("click", () => {
    const dateInput = domElements.dueDateInput.value;
    const newDueDate = formatToLongDate(dateInput);
    const status = domElements.taskStatusSelector.value;
    const priority = domElements.taskPrioritySelector.value;
    domElements.titleText.textContent = domElements.titleInput.value;
    domElements.taskDescription.textContent =
      domElements.taskDescriptionInput.value;
    domElements.dueDate.textContent = newDueDate;
    domElements.taskPriority.textContent = priority;
    domElements.taskStatusElement.textContent = status;
    handlePriority(priority);
    handleTimeUpdate(new Date(newDueDate), domElements.dueDateElement);
    isEditing = false;
    toggleEditMode(editForm, cardContainer, isEditing);
  });
};

const applyDoneState = () => {
  const { checkboxElement, titleText, dueDateElement } = domElements;
  checkboxElement.checked = true;
  titleText.classList.add("title-done");
  if (timeIntervalId) clearInterval(timeIntervalId);
  dueDateElement.textContent = "Completed";
};

export const handleTaskCompleted = () => {
  const { taskStatusElement, dueDateElement, checkboxElement, titleText } =
    domElements;

  const isDone = taskStatusElement.textContent.toLowerCase().trim() == "done";

  if (isDone) {
    applyDoneState();
    return true;
  } else {
    checkboxElement.checked = false;
    titleText.classList.remove("title-done");
  }
  return false;
};

const handlePriority = (priority) => {
  const { taskPriority, taskStatusColor } = domElements;
  switch (priority) {
    case "high":
      taskPriority.style.backgroundColor = "#B80438";
      taskStatusColor.style.backgroundColor = "#B80438";
      break;

    case "medium":
      taskPriority.style.backgroundColor = "#FFA500";
      taskStatusColor.style.backgroundColor = "#FFA500";
      break;

    case "low":
      taskPriority.style.backgroundColor = "#28A745";
      taskSt.style.backgroundColor = "#28A745";
      break;

    default:
      break;
  }
};

const handleCollapseToggle = () => {
  const { collapseToggleBtn, collapsibleSection } = domElements;

  collapseToggleBtn.addEventListener("click", () => {
    const isExpanded =
      collapseToggleBtn.getAttribute("aria-expanded") === "true";

    // toggle state
    collapseToggleBtn.setAttribute("aria-expanded", !isExpanded);

    // toggle classes
    collapsibleSection.classList.toggle("expanded", !isExpanded);
    collapsibleSection.classList.toggle("collapsed", isExpanded);

    // update button text
    collapseToggleBtn.textContent = isExpanded ? "Expand" : "Collapse";
  });
};

const initCollapseState = () => {
  const { collapsibleSection, collapseToggleBtn } = domElements;

  const textLength = collapsibleSection.textContent.length;

  if (textLength > 100) {
    collapsibleSection.classList.add("collapsed");
    collapseToggleBtn.style.display = "inline-block";
    collapseToggleBtn.style.marginTop = "10px";
  } else {
    collapseToggleBtn.style.display = "none";
  }
};

initCollapseState();
handleCollapseToggle();
