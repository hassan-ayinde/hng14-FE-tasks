import {
  handleEdit,
  handleDelete,
  handleCheckboxChange,
  handleTimeUpdate,
} from "./components/todoHandlers.js";

const init = () => {
  const dueDateElement = document.querySelector(
    '[data-testid="test-todo-time-remaining"]',
  );
  const taskStatusElement = document.querySelector(
    '[data-testid="test-todo-status"]',
  );
  const checkboxElement = document.querySelector(
    '[data-testid="test-todo-complete-toggle"]',
  );
  const editButtonElement = document.querySelector(
    '[data-testid="test-todo-edit-button"]',
  );
  const deleteButtonElement = document.querySelector(
    '[data-testid="test-todo-delete-button"]',
  );

  handleCheckboxChange(checkboxElement, taskStatusElement);
  handleDelete(deleteButtonElement);
  handleEdit(editButtonElement);

  handleTimeUpdate(new Date("2026-04-15"), dueDateElement);
};

document.addEventListener("DOMContentLoaded", init);
