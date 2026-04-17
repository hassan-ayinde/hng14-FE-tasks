# 🧑‍💻 Profile Card Component

## 📌 Overview

This project is a responsive and accessible **Profile Card** built using **HTML, CSS, and Vanilla JavaScript**.

It was developed to demonstrate clean UI structure, semantic HTML usage, and testable frontend architecture using `data-testid` attributes.

---

## ✨ Features

- 📱 Responsive profile card layout
- ♿ Accessible semantic HTML structure
- ⏱️ Live time display (updates every second)
- 🖼️ Avatar display using image URL
- 🔗 Social media links (Twitter, Facebook, GitHub)
- 🧾 User details:
  - Name
  - Bio
  - Hobbies
  - Dislikes

---

## 🧪 Testable Elements

All required elements include `data-testid` attributes for easy testing:

| Element                | Test ID                  |
| ---------------------- | ------------------------ |
| Profile Card Container | `test-profile-card`      |
| Avatar                 | `test-user-avatar`       |
| Name                   | `test-user-name`         |
| Time                   | `test-user-time`         |
| Bio                    | `test-user-bio`          |
| Social Links           | `test-user-social-links` |
| Hobbies                | `test-user-hobbies`      |
| Dislikes               | `test-user-dislikes`     |

---

## ⏱️ Time Functionality

The current time is dynamically updated using JavaScript:

- Uses `setInterval()` to update every second
- Displays real-time data in the UI

---

## 🖼️ Avatar Handling

The avatar currently supports:

- ✅ Image via URL (relative or external)

### ⚠️ Note

To fully meet advanced requirements, this component can be extended to:

- Accept image uploads
- Convert uploaded files into URLs using `URL.createObjectURL()`

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## 📂 Project Structure

```
project-root/
│── index.html
│── style.css
│── script.js
│── image/
```

---

## ▶️ How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Navigate into the project folder:

   ```bash
   cd your-repo-name
   ```

3. Open `index.html` in your browser

---

## 📈 Future Improvements

- Add avatar upload functionality
- Improve accessibility (ARIA attributes, better alt text)
- Format time to human-readable format
- Add unit tests (e.g., Vitest, Testing Library)
- Convert into a reusable component (React / Next.js)

---

## 👨‍💻 Author

**Toheeb Ayinde Hassan**

---

## 📄 License

This project is open-source and available under the MIT License.
