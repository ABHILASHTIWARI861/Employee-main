# 🧑‍💼 Employee Task Management System

A role-based **Employee Task Management System** built with **React** and **Tailwind CSS**.  
Admins can create and assign tasks, while employees can track tasks by status.

---

## 🚀 Features

### 🔐 Authentication
- Admin & Employee login
- Role-based dashboards
- Session persistence using `localStorage`

### 👨‍💼 Admin Dashboard
- Create & assign tasks
- View all employees with task statistics
- Centralized state using **Context API**

### 👨‍💻 Employee Dashboard
- Personalized greeting
- Task summary cards
- Task lists by status:
  - New
  - Accepted (Active)
  - Completed
  - Failed

---

## 🛠 Tech Stack

- **Frontend:** React (Hooks)
- **Styling:** Tailwind CSS v4
- **Icons:** lucide-react
- **State Management:** Context API
- **Storage:** Browser `localStorage`

---

## 🧠 Key Concepts Used

- React Hooks (`useState`, `useEffect`, `useContext`)
- Immutable state updates (`map`, spread operator)
- Role-based conditional rendering
- Component-based architecture
- Clean UI with Tailwind utilities

---

## 📂 Project Structure
```
src/
│
├── components/
│   │
│   ├── auth/
│   │   └── Login.jsx
│   │
│   ├── dashboard/
│   │   ├── AdminDashboard.jsx
│   │   └── EmployeeDashboard.jsx
│   │
│   ├── header/
│   │   └── Header.jsx
│   │
│   ├── tasks/
│   │   ├── CreateTask.jsx
│   │   ├── TaskStats.jsx
│   │   ├── TaskList.jsx
│   │   │
│   │   ├── cards/
│   │   │   ├── NewTask.jsx
│   │   │   ├── AcceptedTask.jsx
│   │   │   ├── CompletedTask.jsx
│   │   │   └── FailedTask.jsx
│   │   │
│   │   └── admin/
│   │       └── AllTasks.jsx
│
├── context/
│   └── AuthProvider.jsx
│
├── utils/
│   └── localStorage.js
│
├── App.jsx
├── main.jsx
└── index.css
---
```
## 🧪 Demo Credentials

### Admin
- Email: Admin@123
- Password: 123

### Employee
- Email: amit@gmail.com or priya@example.com or rahul@example.com ...so on as per role
- Password: 123

---

## 🎨 UI Highlights

- Modern card-based layouts
- Responsive grids
- Color-coded task statuses
- Icons with `lucide-react`
- Tailwind v4 setup

---

## 🧠 State Management Logic

- Employee & admin data stored in `localStorage`
- Loaded into Context on app start
- All updates follow **immutable patterns**
- No direct state mutation (`push`, direct assignment avoided)

---

## ⚠️ Important Notes

- `setState` is used to signal React with **new references**
- Temporary form data handled via local variables
- UI updates rely on immutable updates

---

## 📌 Future Improvements

- Backend integration (Node.js + MongoDB)
- JWT authentication
- Task action buttons (Accept / Complete / Fail)
- Admin analytics dashboard
- Dark mode & animations

---

## 📄 License

This project is for learning and demonstration purposes.

---

## 👨‍💻 Author

**Abhilash Tiwari**  
Frontend / React Developer
