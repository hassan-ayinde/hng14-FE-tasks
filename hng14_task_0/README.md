# 📝 Advanced Todo Card (Stage 1)

## 📌 Overview

This project is an advanced, interactive Todo Card built using **HTML, CSS, and JavaScript**. It extends a static component (Stage 0) into a **stateful, accessible, and dynamic UI component**.

The card supports editing, status management, priority updates, time tracking, and accessibility enhancements — all without a framework.

---

## 🚀 Features

### ✏️ Edit Mode

* Edit title, description, priority, status, and due date
* Save updates UI instantly
* Cancel restores previous values
* Focus moves into form and returns to Edit button on close

---

### 🔁 Status Management

* Status options: `Pending`, `In Progress`, `Done`
* Fully synced across:

  * Checkbox
  * Status label
  * Status dropdown
* When marked **Done**:

  * Timer stops
  * Displays `"Completed"`
  * Applies strike-through styling

---

### 🎯 Priority Indicator

* Dynamic visual styling:

  * High → Red
  * Medium → Orange
  * Low → Green
* Updates instantly when edited

---

### 📖 Expand / Collapse Description

* Long descriptions are truncated
* Toggle: **View more / View less**
* Keyboard accessible (`aria-expanded`, `aria-controls`)

---

### ⏱️ Time Management

* Updates every 60 seconds
* Displays:

  * `Due in X days/hours/minutes`
  * `Overdue by X time`
* Overdue badge appears only when needed
* Stops updating when task is completed

---

### ♿ Accessibility

* Proper `<label>` usage for all inputs
* Keyboard navigation supported
* Focus is trapped inside edit form (bonus)
* ARIA attributes for interactive elements
* Prepared for `aria-live` updates

---

### 📱 Responsive Design

* Mobile (320px), Tablet (768px), Desktop (1024px+)
* Edit form stacks on smaller screens
* Handles long content gracefully

---

## 🔄 What Changed from Stage 0

* Static UI → Interactive component
* Added edit functionality
* Introduced state handling (status, priority, time)
* Implemented accessibility improvements
* Added dynamic time tracking
* Improved UI responsiveness

---

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/todo-card.git
cd todo-card
```

### 2. Install dependencies (for testing)

```bash
npm install
```

---

## ▶️ Usage

### Run locally

Simply open:

```bash
index.html
```

Or use a live server (recommended):

```bash
npx live-server
```

---

## 🧪 Testing (Vitest)

### Run tests

```bash
npx vitest
```

### Run with UI

```bash
npx vitest --ui
```

---

### ✅ What is tested

* DOM rendering
* Status updates
* Edit form behavior
* Time formatting logic
* Accessibility attributes

---

## 📁 Project Structure

```bash
project/
│
├── index.html
├── style.css
├── script.js
│
├── components/
│   └── todoHandlers.js
│
├── utils/
│   ├── domElements.js
│   └── time.js
│
│
└── README.md
```

---

## 🧠 Design Decisions

### 1. Separation of Concerns

The codebase is structured into:

* **DOM Layer** → `domElements.js`
* **Logic Layer** → `todoHandlers.js`
* **Utility Layer** → `time.js`

This improves:

* Maintainability
* Testability
* Readability

---

### 2. Single Source of Truth (State-driven UI)

Instead of relying on DOM values directly, the UI is controlled through:

* Status state
* Priority state
* Time state

This avoids inconsistent UI behavior and duplicated logic.

---

### 3. Reusable Functions

Functions like:

* `handleTimeUpdate`
* `handleTaskCompleted`
* `toggleEditMode`

are reusable and decoupled, making the system scalable.

---

### 4. Accessibility First Approach

* ARIA attributes used for interactive elements
* Focus management implemented for edit mode
* Keyboard navigation supported

This ensures inclusivity and better usability.

---

### 5. Defensive UI Updates

Every “show” action (e.g., overdue badge) has a corresponding “hide” condition to prevent stale UI states.

---

### 6. Interval Management

Timers are:

* Stored in a variable
* Cleared before creating new ones

This prevents:

* Memory leaks
* Multiple intervals running simultaneously

---

### 7. Progressive Enhancement

Core functionality works without advanced features, while enhancements (like collapse, animations, accessibility) improve experience without breaking usability.

---

## ⚠️ Known Limitations

* Single card only (not a full app)
* No persistent storage (e.g., localStorage)
* No animations for expand/collapse (can be added)

---

## 🚀 Future Improvements

* Add multiple todo cards (full app)
* Persist data using localStorage or API
* Add animations and transitions
* Convert to component-based architecture (React)

---

## 👤 Author

**Toheeb Ayinde Hassan**

---

## 📄 License

This project is for educational purposes.
