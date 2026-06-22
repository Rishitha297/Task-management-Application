# Task Management Application

##  Overview
A full-stack Task Management Web Application built using MERN-style architecture for creating, updating, deleting, and tracking tasks with secure user authentication.

---

##  Features
- User Registration & Login (Authentication)
- Secure JWT-based Authorization
- Create, Read, Update, Delete (CRUD) Tasks
- Task Status Tracking (Pending / Completed)
- Fully Responsive UI (Mobile + Desktop)
- Clean and Simple Dashboard

---

##  Technologies Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Development Tools
- VS Code (Code Editor)
- Git & GitHub (Version Control)
- Node.js (Runtime Environment)

---
## 🚀 Running the Project

### 🖥 Backend
- URL: http://localhost:5000

---

### 🌐 Frontend
- URL: http://localhost:5173

---

(Vite default port)

## 🎯 Outcomes

- Secure user authentication system using JWT  
- Full CRUD operations for task management  
- Responsive UI for mobile and desktop devices  
- Clean separation of frontend and backend  
- REST API integration between client and server  
- Scalable project structure using MVC pattern  



##  Project Structure

```text
TaskManager/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── main.js
│   │   └── style.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── .env
├── .gitignore
└── README.md
---
