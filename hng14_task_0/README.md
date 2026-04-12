# Todo Task Card Component

A simple, responsive Todo Task Card UI built with HTML, CSS, and JavaScript. This component displays task details such as priority, status, description, tags, deadline, and real-time countdown.

## Features

- Task priority indicator (e.g., High)
- Task status (Pending → Done)
- Editable & deletable task actions
- Tags for categorization (#security, #backend, #auth)
- Mark task as complete
- Real-time countdown to deadline
- Overdue detection
- Accessible with aria-label and data-testid
- Fully responsive design

## Tech Stack

HTML5 – Structure
CSS3 – Styling (Flexbox + responsive layout)
Vanilla JavaScript – Interactivity & time logic

## Project Structure

📁 project-root
│── index.html
│── style.css
│── script.js

## How It Works

- Task Completion
When the checkbox is checked:
Status changes from pending → done
Accessibility label updates

```js
checkboxElement.addEventListener("change", () => {
  if (checkboxElement.checked) {
    taskStatusElement.textContent = "done";
    taskStatusElement.setAttribute("aria-label", "completed-status");
  }
});
```

- Action Buttons
Edit Button → Logs action to console
Delete Button → Shows alert

```js
editButtonElement.addEventListener("click", () => {
  console.log("Edit Clicked")
});

deleteButtonElement.addEventListener("click", () => {
  alert("Delete Clicked")
});
```

- Countdown Timer
Calculates time difference between current date and deadline
Updates every 60 seconds
Handles:
Future → due in Xd Xh Xm Xs
Present → due now
Past → overdue by Xd Xh Xm Xs

```js
setInterval(updateRemainingTime, 60000);
```

## UI Highlights

Clean card design with subtle shadows
Color-coded priority and status
Tag chips for better categorization
Mobile-friendly layout

## Testability

The app uses data-testid attributes, making it easy to test with:

React Testing Library
Vitest
Cypress

## Possible Improvements

- Connect to backend (Node.js + MongoDB)
- Implement real edit functionality (modal/form)
- Add delete confirmation modal
- Persist tasks (localStorage or database)
- Add multiple task support
- Dark mode support
- Notifications for deadlines

## SKILLS GAINED

- DOM manipulation
- Event handling
- Time/date calculations in JavaScript
- Accessibility basics
- Writing test-friendly code
- UI component structuring

## Getting Started

```bash
Clone the repo:
git clone https://github.com/your-username/todo-task-card.git
Open the project:
cd todo-task-card
Run in browser:
Open index.html
```
