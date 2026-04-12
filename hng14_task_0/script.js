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
checkboxElement.addEventListener("change", () => {
  if (checkboxElement.checked) {
    taskStatusElement.textContent = "done";
    taskStatusElement.setAttribute("aria-label", "completed-status");
  }
});
editButtonElement.addEventListener("click", () => {
  console.log("Edit Clicked")
});
deleteButtonElement.addEventListener("click", () => {
  alert("Delete Clicked")
});
const dueDate = new Date("2026-04-16");
const updateRemainingTime = () => {
  const currentDate = new Date();
  const timeRemaining = dueDate - currentDate;
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  const dueDateElement = document.querySelector(
    '[data-testid="test-todo-time-remaining"]',
  );
  if (timeRemaining < 0) {
    dueDateElement.textContent = `overdue by ${Math.abs(days)}d ${Math.abs(hours)}h ${Math.abs(minutes)}m ${Math.abs(seconds)}s`;
    return;
  } else if (timeRemaining === 0) {
    dueDateElement.textContent = "due now";
  } else {
    dueDateElement.textContent = `due in ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
};
updateRemainingTime();
setInterval(updateRemainingTime, 60000);
