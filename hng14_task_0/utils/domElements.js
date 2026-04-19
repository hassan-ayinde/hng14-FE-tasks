export const domElements = {
  dueDateElement: document.querySelector(
    '[data-testid="test-todo-time-remaining"]',
  ),
  taskStatusElement: document.querySelector('[data-testid="test-todo-status"]'),
  checkboxElement: document.querySelector(
    '[data-testid="test-todo-complete-toggle"]',
  ),
  editButtonElement: document.querySelector(
    '[data-testid="test-todo-edit-button"]',
  ),
  deleteButtonElement: document.querySelector(
    '[data-testid="test-todo-delete-button"]',
  ),
  cardContainerElement: document.querySelector(".card-container"),
  editFormElement: document.querySelector(".task-edit-form-wrapper"),
  titleInput: document.querySelector(
    '[data-testid="test-todo-edit-title-input"]',
  ),
  titleText: document.querySelector('[data-testid="test-todo-title"]'),
  taskDescription: document.querySelector(
    '[data-testid="test-todo-description"]',
  ),
  taskDescriptionInput: document.querySelector(
    '[data-testid="test-todo-edit-description-input"]',
  ),
  cancelBtn: document.querySelector('[data-testid="test-todo-cancel-button"]'),
  saveBtn: document.querySelector('[data-testid="test-todo-save-button"]'),
  dueDateInput: document.querySelector(
    '[data-testid="test-todo-edit-due-date-input"]',
  ),
  dueDate: document.querySelector(".due-date"),
  taskPriority: document.querySelector('[data-testid="test-todo-priority"]'),
  taskPrioritySelector: document.querySelector(
    '[data-testid="test-todo-edit-priority-select"]',
  ),
  taskStatusSelector: document.querySelector(
    '[data-testid="test-todo-status-control"]',
  ),
  taskStatusColor: document.querySelector(".task-status"),
  collapseToggleBtn: document.querySelector(
    '[data-testid="test-todo-expand-toggle"]',
  ),
  collapsibleSection: document.querySelector(
    '[data-testid="test-todo-collapsible-section"]',
  ),
  overDueBadge: document.querySelector(
    '[data-testid="test-todo-overdue-indicator"]',
  ),
};
