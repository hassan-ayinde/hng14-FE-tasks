import {
  handleEdit,
  handleDelete,
  handleCheckboxChange,
  handleTimeUpdate,
  handleCancelEdit,
  handleSaveEdit,
} from "./components/todoHandlers.js";
import { domElements } from "./utils/domElements.js";


const init = () => {
  handleCheckboxChange(
    domElements.checkboxElement,
    domElements.taskStatusElement,
  );
  handleDelete(domElements.deleteButtonElement);
  handleEdit(
    domElements.editButtonElement,
    domElements.cardContainerElement,
    domElements.editFormElement,
  );
  handleCancelEdit(
    domElements.cancelBtn,
    domElements.editFormElement,
    domElements.cardContainerElement,
  );
  handleSaveEdit(
    domElements.saveBtn,
    domElements.editFormElement,
    domElements.cardContainerElement,
  );

  handleTimeUpdate(new Date("2026-04-15"), domElements.dueDateElement);
};

document.addEventListener("DOMContentLoaded", init);
